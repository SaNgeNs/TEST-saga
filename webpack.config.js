const configDir = './config/webpack/';
const merge = require('webpack-merge');
const fileExists = require('file-exists');
const baseConfig = require(`${configDir}webpack.base.config.js`);
const scanFolder = require('scan-folder');

module.exports = function() {
  const environment = process.env.NODE_ENV || 'local';

  const privateConfigsPath = scanFolder(`${configDir}local`);

  const privateConfig = privateConfigsPath.length ? require(privateConfigsPath[0]) : false;

  const envConfig = fileExists.sync(`${configDir}webpack.${environment}.config.js`)
    ? require(`${configDir}webpack.${environment}.config.js`)
    : require(`${configDir}webpack.local.config.js`);

  return merge(baseConfig, privateConfig && environment === 'local' ? privateConfig : envConfig);
};
