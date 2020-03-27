const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withFonts = require('next-fonts');
// //////////////////////////////////////////////////////

module.exports = withPlugins(
  [
    [optimizedImages, {
      handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif']
    }],
    withFonts,
    withSass,
    withCSS
  ],
  {
    devIndicators: {
      autoPrerender: false
    }
  }
);
