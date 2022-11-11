module.exports = function (eleventyConfig) {
  // allow assets to be passed into /public
  eleventyConfig.addPassthroughCopy('./src/assets');

  // watch CSS files for changes - doesn't trigger 11ty rebuild
  eleventyConfig.setBrowserSyncConfig({
    files: './public/css/**/*.css',
  });

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      output: 'public',
    },
    // allows .html files to contain nunjucks templating language
    htmlTemplateEngine: 'njk',
  };
};
