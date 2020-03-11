const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');
// /////////////////////////////////////////////////
module.exports = withPlugins(
  [
    withSass,
    withCSS
  ],
  {
    devIndicators: {
      autoPrerender: false
    }
  }
);
