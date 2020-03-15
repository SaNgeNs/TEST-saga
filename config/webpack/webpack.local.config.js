const { join } = require('path');

const baseDir = process.cwd();
const buildPath = join(baseDir, 'build');

module.exports = {
  mode: 'development',
  output: {
    path: buildPath,
    filename: 'main-[hash].js'
  },
  devServer: {
    contentBase: buildPath,
    port: 3006,
    host: '0.0.0.0',
    hot: true,
    inline: true,
    historyApiFallback: true,
    disableHostCheck: true,
    compress: true,
    openPage: '',
    https: false,
  },
};