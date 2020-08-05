module.exports = {
  siteMetadata: {
    title: `COVID-19 (Coronavirus) Vaccine Tracker Online`,
    description: `An Open-Source COVID-19 Vaccine Tracker online, updated almost daily. Get the latest updates on the vaccine development for coronavirus.`,
    author: `Rohit Bind, Ujjwal Singhal, Mitxiyswang, Faisal, Rishu, Shreyash Barot, Vipin, Mohit Gupta`,
    keywords: [
      'COVID-19 vaccine news',
      'COVID-19 vaccine latest update',
      'coronavirus vaccine latest update',
      'coronavirus vaccine tracker',
      'vaccine tracker in layman terms'
    ],
    url: 'https://thevaccinetracker.com/',
    siteUrl: `https://thevaccinetracker.com/`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://thevaccinetracker.com/',
        sitemap: 'https://thevaccinetracker.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-168784956-1',
        head: true
      }
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
        icon: `src/assets/images/favicon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
        spreadsheetId: '1ImpYv9-_qKmF8JkdV8YW1tN8IAycPszPpG6VCn-rH4Q',
        worksheetTitle: 'vaccineData',
        credentials: require('./the-vaccine-tracker-395fdaa554f5.json')
      }
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
        spreadsheetId: '1ImpYv9-_qKmF8JkdV8YW1tN8IAycPszPpG6VCn-rH4Q',
        worksheetTitle: 'VaccineCounts',
        credentials: require('./the-vaccine-tracker-395fdaa554f5.json')
      }
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 1933246,
        sv: 6
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
