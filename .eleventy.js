module.exports = function (eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy("_assets");
  
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      include: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
