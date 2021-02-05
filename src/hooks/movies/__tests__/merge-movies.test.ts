import { Movies } from '~/components/types'
import { mergeMovies } from '~/hooks/movies/useFetchMovies'

const fwStandard: Movies = {
  Provider: 'Film World',
  Movies: [
    {
      ID: 'fw2488496',
      Title: 'Star Wars: Episode VII - The Force Awakens',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg',
    },
    {
      ID: 'fw2527336',
      Title: 'Star Wars: Episode VIII - The Last Jedi',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg',
    },
  ],
}
const cwStandard: Movies = {
  Provider: 'Cinema World',
  Movies: [
    {
      ID: 'cw2488496',
      Title: 'Star Wars: Episode VII - The Force Awakens',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg',
    },
    {
      ID: 'cw2527336',
      Title: 'Star Wars: Episode VIII - The Last Jedi',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg',
    },
  ],
}
const cwDifferentTitle: Movies = {
  Provider: 'Cinema World',
  Movies: [
    {
      ID: 'cw2527777',
      Title: 'Star Wars: Episode 0 - The First Jedi',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg',
    },
    {
      ID: 'cw2488496',
      Title: 'Star Wars: Episode VII - The Force Awakens',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg',
    },
  ],
}
function clone(obj: any) {
  return JSON.parse(JSON.stringify(obj))
}

describe('Movies merge', () => {
  it('should match and merge results', function () {
    const movies = mergeMovies(clone(fwStandard), clone(cwStandard))
    expect(movies.Provider).toBe('Film World,Cinema World')
    expect(movies.Movies[0].ID).toBe('fw2488496,cw2488496')
    expect(movies.Movies.length).toBe(2)
  })
  it('should match and merge results in correct order', function () {
    const movies = mergeMovies(clone(cwStandard), clone(fwStandard))
    expect(movies.Provider).toBe('Cinema World,Film World')
    expect(movies.Movies[0].ID).toBe('cw2488496,fw2488496')
    expect(movies.Movies.length).toBe(2)
  })
  it('should match and permit multiple merges', function () {
    const movies = mergeMovies(clone(cwStandard), clone(fwStandard))
    const movies2 = mergeMovies(movies, clone(fwStandard))
    expect(movies.Movies[0].ID).toBe('cw2488496,fw2488496')
  })
  it('should not match when titles are different', function () {
    const movies = mergeMovies(clone(fwStandard), clone(cwDifferentTitle))
    expect(movies.Movies[0].ID).toBe('fw2488496,cw2488496')
    expect(movies.Movies[1].ID).toBe('fw2527336')
    expect(movies.Movies[2].ID).toBe('cw2527777')
    expect(movies.Movies.length).toBe(3)
  })
})
