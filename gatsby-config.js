module.exports = {
  siteMetadata: {
    title: `Darya Zata`,
    description: `My Portfolio website that shows examples of my dope work.`,
    author: `Darya Zata`,
  },

  pathPrefix: '/myPortfolio20',

  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/docs/assets/images`,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `docs/assets/images/my-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Caveat`,
          `cursive`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Caveat`,
    //         subsets: [`cursive`],
    //         //  'Caveat', cursive;
    //       },

    //     ],
    //   },
    // }

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
