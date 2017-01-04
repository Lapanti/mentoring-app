export default {
  output: {
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolver: {
    extensions: ['', '.js', '.ts'],
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'babel-loader!ts-loader',
        exclude: [/node_modules/],
      },
    ],
  },
};
