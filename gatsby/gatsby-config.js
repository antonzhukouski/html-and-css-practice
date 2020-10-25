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
    }
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
