// eslint-disable-next-line no-undef
module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        root: ['src'],
        alias: {
          '@assets': './assets',
          '@components': './components',
          '@styles': './styles',
        },
        extensions: ['.js', '.jsx', '.json'],
      },
    ],
  ],
}
