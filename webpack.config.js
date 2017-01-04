module.exports = {
  entry: {
    app: './src/app.ts',
    vendor: [
      'babel-polyfill'
    ]
  },
  output: {
    path: __dirname + "/dist/assets",
    filename: "[name].bundle.js",
    publicPath: "/assets"
  },
  resolver: {
    extensions: ['', '.js', '.ts']
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'babel-loader!ts-loader',
        exclude: 'node_modules'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: 'node_modules'
      }
    ]
  },
  plugins: [
  ],
  devServer: {
    contentBase: __dirname + "/src",
    hot: true
  }
};
