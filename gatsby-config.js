module.exports = {
  siteMetadata: {
    title: `The Vaccine Tracker for COVID - 19`,
    description: `An open Source Project for the COVID - 19 Vaccine Tracker`,
    author: `Rohit Bind, Ujjwal Singhal, Mitxiyswang, Faisal, Rishu, Shreyash Barot, Vipin, Mohit Gupta`,
    keywords: ["Vaccine","COVID - 19","Corona"],
    url: "",
    siteUrl: `https://thevaccinetracker.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://thevaccinetracker.com/',
        sitemap: 'https://thevaccinetracker.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
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
        background_color: `#3830EF`,
        theme_color: `#3830EF`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
