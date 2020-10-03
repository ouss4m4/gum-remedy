/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Gum Remedy Tricks`,
    description: `As Long As You’re Not Stabbing Your Gum When You Brush, There Shouldn't Be Any Bleeding`,
    siteUrl: `https://gum-remedy.com`,
    url: `https://gum-remedy.com`,
    twitterHandle: "",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
