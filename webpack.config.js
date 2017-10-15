module.exports = {
  entry: [
    'whatwg-fetch',
    './src/index.js'
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/}
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  }
}