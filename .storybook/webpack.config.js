const path = require('path')

module.exports = ({ config }) => {
  // Alternately, for an alias:
  config.resolve.alias = {
    ...config.resolve.alias,
    '~': path.resolve(__dirname, '..', 'src'),
    '@stubs': path.resolve(__dirname, '..', 'stubs'),
  }

  return config
}
