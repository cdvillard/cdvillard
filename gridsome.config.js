// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [{
    use: `gridsome-plugin-netlify-cms`,
    options: {
      typeName: 'Post',
      path: 'content/posts/*.md',
      route: '/:slug',
      refs: {
        tags: {
          typeName: 'Tag',
          route: '/tag/:id',
          create: true
        }
      }
    }

  }],
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'norefferer'],
      anchorClassName: 'icon icon-link',

    }
  }
}
