const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseDir = process.cwd();

module.exports = {
  entry: {
    main: './src/index.jsx',
  },
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Src: `${baseDir}/src/`,
      Components: `${baseDir}/src/Components/`,
      Pages: `${baseDir}/src/Pages/`,
      Reducers: `${baseDir}/src/reducers/`,
      Actions: `${baseDir}/src/actions/`,
      Styles: `${baseDir}/src/styles/`,
      Types: `${baseDir}/src/types/`,
      Saga: `${baseDir}/src/saga/`,
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${baseDir}/static/index.ejs`,
      inject: 'body',
    }),
  ],
};
