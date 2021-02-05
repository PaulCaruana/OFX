/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const dotenvLoad = require('dotenv-load')

const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

dotenvLoad()

module.exports = withPlugins([withImages], {
  onDemandEntries: {
    // Make sure entries are not getting disposed.
    maxInactiveAge: 1000 * 60 * 60,
  },
  webpack(config, options) {
    config.node = {
      fs: 'empty',
    }
    config.resolve.alias['~'] = path.join(__dirname, 'src')
    return config
  },
  env: {
    CINEMAWORLD_FILM_SEARCH_API: process.env.CINEMAWORLD_FILM_SEARCH_API,
    CINEMAWORLD_FILM_MOVIE_API: process.env.CINEMAWORLD_FILM_MOVIE_API,
    CINEMAWORLD_FILM_API_KEY: process.env.CINEMAWORLD_FILM_API_KEY,
    FILMWORLD_FILM_SEARCH_API: process.env.FILMWORLD_FILM_SEARCH_API,
    FILMWORLD_FILM_MOVIE_API: process.env.FILMWORLD_FILM_MOVIE_API,
    FILMWORLD_FILM_API_KEY: process.env.FILMWORLD_FILM_API_KEY,
  },
})
