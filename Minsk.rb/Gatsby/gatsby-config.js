module.exports = {
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
    {
    resolve: `gatsby-source-filesystem`,
    options: {
    name: `images`,
    path: `${__dirname}/src/images`,
    plugins: [
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
    ]
  },}
  ],
}
