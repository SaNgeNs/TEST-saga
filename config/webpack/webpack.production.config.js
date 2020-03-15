const { join } = require('path');

const baseDir = process.cwd();
const buildPath = join(baseDir, 'build');

module.exports = {
  mode: 'production',
  output: {
    path: buildPath,
    filename: 'main-[contenthash].js'
  },
  /* production build... */
};
