const path = require('path');

module.exports = {
  webpack(config, _) {
    config.resolve.alias['~'] = path.join(__dirname, 'src');
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  },
};
