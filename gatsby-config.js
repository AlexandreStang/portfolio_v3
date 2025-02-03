/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  // Metadata to use throughout the website
  siteMetadata: {
    title: "Alexandre Stang",
    author: "Alexandre Stang",
    description: "Développeur front-end spécialisé dans la conception et l'intégration d'interfaces visuelles.",
    role: "Développeur front-end",
    siteUrl: "https://alexandrestang.com/",
    contact: {
      email: "alexandre.stang.web@gmail.com",
      github: "https://github.com/AlexandreStang",
      linkedIn: "https://www.linkedin.com/in/alexandre-stang-163208a7/",
      behance: "https://www.behance.net/alexandrestang"
    }
  },
  plugins: [
    // https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/ <- To transform Markdown files
    `gatsby-transformer-remark`,
    // https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/ <- To access and read files
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `images`,
        // Path to the directory
        path: `${__dirname}/src/img/`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `content`,
        // Path to the directory
        path: `${__dirname}/src/content/`,
      }
    },
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-image/?=gatsby-image <- To add responsive images
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
