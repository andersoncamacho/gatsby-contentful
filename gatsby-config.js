/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `comfama-contentful`,
    description: `Comfama Contentful`,
    author: `@andersoncamacho`,
  },
  plugins: [{
    
    resolve: `gatsby-plugin-google-fonts`,
    options: {
        fonts: [
            `Potta One`,
            `open sans\:400`,
            "open sans:400i",
            `open sans\:700`,
            "open sans:700i",
            `open sans\:800`,
            "open sans:800i",
        ],
    },
  
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "Yc9LwbAWKpEMuVprhg0ZeIVy1lRZxH88C6piC13aHCA",
      "spaceId": "f543wm2mc02v"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-styled-components", "gatsby-plugin-google-gtag", "gatsby-plugin-sitemap", `gatsby-plugin-react-helmet`,{
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-transformer-remark", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};