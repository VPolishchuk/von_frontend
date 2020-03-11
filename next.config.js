const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images')
const withPlugins = require('next-compose-plugins');
// const optimizedImages = require('next-optimized-images');
// /////////////////////////////////////////////////
module.exports = withPlugins(
  [
    withSass,
    withCSS,
    withImages
    // optimizedImages
  ],
  {
    devIndicators: {
      autoPrerender: false
    }
  }
);
