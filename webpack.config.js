module.exports = {
  entry: {
    main: './src/index',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  mode: 'development',
};
