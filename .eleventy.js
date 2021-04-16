const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight"),
      markdownIt = require('markdown-it'),
      moment = require("moment");

module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPassthroughCopy('favicon.ico');
  eleventyConfig.addPassthroughCopy('assets/fonts');
  const options = {
    html: true,
    breaks: true,
    linkify: false
  };
  eleventyConfig.setLibrary("md", markdownIt(options));
  eleventyConfig.addLiquidFilter("toUTCString", (date) => {
    const utc = date.toUTCString();
    return moment.utc(utc).format("YYYY-MM-DD");
  });
  return {
    // Use liquid in html templates
    htmlTemplateEngine: "liquid"
  };
};
