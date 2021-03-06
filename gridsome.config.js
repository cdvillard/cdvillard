// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Charles Villard",
  plugins: [
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        enableIdentityWidget: true
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "src/blog/**/*.md",
        typeName: "BlogPost",
        route: "/blog/:slug"
      }
    }
  ]
};
