const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
// const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
// /////////////////////////////////////////////////
module.exports = withPlugins(
  [
    [optimizedImages, {
      handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif']
    }],
    // withImages,
    withSass,
    withCSS
  ],
  {
    devIndicators: {
      autoPrerender: false
    }
  }
);

// const nextConf = {
//   devIndicators: {
//     autoPrerender: false
//   },
//   handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif']
// };

// module.exports = optimizedImages(withSass(withCSS({nextConf})));
