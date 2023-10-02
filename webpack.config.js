const path = require('path');

module.exports = {    
  entry: {
    main: path.resolve(__dirname, './src/js/app.js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  }
}