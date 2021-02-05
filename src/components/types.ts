export type MovieSummary = {
  ID: string
  Title: string
  Type?: 'movie' | 'trailer'
  Poster?: string
}

export type Movies = {
  Provider: string
  Movies: MovieSummary[]
}

export type Movie = {
  ID: string
  Title: string
  Year?: string
  Rated?: string
  Type?: 'movie' | 'trailer'
  Poster?: string
  Released?: string
  Runtime?: string
  Genre?: string
  Director?: string
  Writer?: string
  Actors?: string
  Plot?: string
  Language?: string
  Country?: string
  Production?: string
  Price?: number
}
