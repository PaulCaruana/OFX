import { Movies, MovieSummary } from '~/components/types'
import useFetch from '~/hooks/useFetch'

const cinemaPayload = {
  url: process.env.CINEMAWORLD_FILM_SEARCH_API,
  headers: {
    'x-api-key': process.env.CINEMAWORLD_FILM_API_KEY,
  },
}
const filmPayload = {
  url: process.env.FILMWORLD_FILM_SEARCH_API,
  headers: {
    'x-api-key': process.env.FILMWORLD_FILM_API_KEY,
  },
}

const fetchOptions = {
  shouldRetryOnError: true,
  errorRetryCount: 3,
  errorRetryInterval: 1000,
}

const filterMovies = (movies: any) => {
  const movieTypes = movies.Movies.filter(movie => movie.Type === 'movie')
  return {
    Provider: movies.Provider,
    Movies: movieTypes,
  } as Movies
}

// Merge results into a single list of movies
export const mergeMovies = (primary: Movies, secondary: Movies) => {
  // Include only movie types
  const primaryMovies = filterMovies(primary)
  const secondaryMovies = filterMovies(secondary)

  // Merge movies by same title
  const moviesByTitle = new Map(primaryMovies.Movies.map(movie => [movie.Title, movie]))
  for (const filmMovie of secondaryMovies.Movies) {
    const title = filmMovie.Title
    // If cinema movie exists then merge
    const movie = moviesByTitle.get(title) as MovieSummary
    if (movie) {
      // Concatenate each ID as a common separated eg. ID='primaryKey,secondaryKey'
      const idList = movie.ID.split(',').concat(filmMovie.ID.split(','))
      const idSet = new Set(idList)
      movie.ID = Array.from(idSet).join(',')
    } else {
      moviesByTitle.set(title, filmMovie)
    }
  }
  const provider = `${primaryMovies.Provider},${secondaryMovies.Provider}`
  const movies = Array.from(moviesByTitle.values())
  return {
    Provider: provider,
    Movies: movies,
  }
}

export default function useFetchMovies() {
  const { data: cinemaData } = useFetch<Movies>(cinemaPayload, fetchOptions)
  const { data: filmData } = useFetch<Movies>(filmPayload, fetchOptions)
  if (!cinemaData && !filmData) {
    return
  }
  if (cinemaData && !filmData) {
    return filterMovies(cinemaData)
  }
  if (!cinemaData && filmData) {
    return filterMovies(filmData)
  }

  // Merge Cinema and Film By movie title
  const cinemaMovies = filterMovies(cinemaData)
  const filmMovies = filterMovies(filmData)
  const moviesByTitle = new Map(cinemaMovies.Movies.map(movie => [movie.Title, movie]))
  for (const filmMovie of filmMovies.Movies) {
    const title = filmMovie.Title
    // If cinema movie exists then merge
    const movie = moviesByTitle.get(title) as MovieSummary
    if (movie) {
      const ids = movie.ID.split(',')
      const idAsSet = new Set(ids)
      idAsSet.add(filmMovie.ID)
      movie.ID = Array.from(idAsSet).join(',')
    } else {
      moviesByTitle[title] = filmMovie
    }
  }
  const provider = `${cinemaMovies.Provider},${filmMovies.Provider}`
  const movies = Array.from(moviesByTitle.values())
  const data = {
    Provider: provider,
    Movies: movies,
  }
  return data
}
