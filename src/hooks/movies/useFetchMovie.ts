import { Movie } from '~/components/types'
import useFetch from '~/hooks/useFetch'

const getProviders = (ids: string) => {
  const idList = ids.split(',')
  const cwId = idList.find(id => id.startsWith('cw'))
  const fwId = idList.find(id => id.startsWith('fw'))
  const cinemaPayload = {
    url: `${process.env.CINEMAWORLD_FILM_MOVIE_API}/${cwId}`,
    headers: {
      'x-api-key': process.env.CINEMAWORLD_FILM_API_KEY,
    },
  }
  const filmPayload = {
    url: `${process.env.FILMWORLD_FILM_MOVIE_API}/${fwId}`,
    headers: {
      'x-api-key': process.env.FILMWORLD_FILM_API_KEY,
    },
  }

  return {
    cinemaWorld: {
      title: 'Cinema World',
      payload: cwId ? cinemaPayload : null,
    },
    filmWorld: {
      title: 'Film World',
      payload: fwId ? filmPayload : null,
    },
  }
}

const fetchOptions = {
  shouldRetryOnError: true,
  errorRetryCount: 3,
  errorRetryInterval: 1000,
}

export default function useFetchMovie(ids = '') {
  const providers = getProviders(ids)
  // If payload null then request will be ignored (note: hooks cannot be in a loop or conditional expression)
  const { data: cinemaMovie } = useFetch<Movie>(providers.cinemaWorld.payload, fetchOptions)
  const { data: filmMovie } = useFetch<Movie>(providers.filmWorld.payload, fetchOptions)

  if (!cinemaMovie && !filmMovie) {
    return
  }

  const { Price: cinemaPrice, ...commonCinemaMovie } = cinemaMovie || {}
  const { Price: filmPrice, ...commonFilmMovie } = filmMovie || {}

  return {
    ...commonCinemaMovie,
    ...commonFilmMovie,
    ID: ids,
    providers: [
      {
        id: 'cinemaWorld',
        name: providers.cinemaWorld.title,
        lowest: cinemaPrice ? cinemaPrice < (filmPrice || Number.MAX_SAFE_INTEGER) : false,
        price: cinemaPrice,
      },
      {
        id: 'filmWorld',
        name: providers.filmWorld.title,
        lowest: filmPrice ? filmPrice < (cinemaPrice || Number.MAX_SAFE_INTEGER) : false,
        price: filmPrice,
      },
    ],
  }
}
