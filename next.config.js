const path = require('path');

const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  webpack(config, _) {
    config.resolve.alias['~'] = path.join(__dirname, 'src');
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    config.resolve.alias.images = path.join(__dirname, 'src/assets/images');
    config.resolve.alias.svgs = path.join(__dirname, 'src/assets/svgs');
    return config;
  },
});
