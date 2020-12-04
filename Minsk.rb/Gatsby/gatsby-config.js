/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['roboto', 'space-mono'],
          urls: ['/fonts/fonts.scss']
        }
      }
    },

    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `./src/images/`,
    //   },
    // },

    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `pages`,
    //     path: `${__dirname}/src/pages/`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `data`,
    //     path: `${__dirname}/src/data/`,
    //     ignore: [`**/\.*`], // ignore files starting with a dot
    //   },
    // },
    /*{
      'gatsby-plugin-web-font-loader' ,
      options: {
        custom: {
          families: ['Roboto', 'Space-mono'],
          urls: ["../fonts/fonts.scss"]
        }
      }
    },*/
  ],
}
