import { useLocation } from '@reach/router'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'
import socialImage from '../assets/images/Logo-white-bg.png'

const SEO = ({ title, description, article }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    lang,
    defaultTitle,
    defaultDescription,
    keywords,
    siteUrl,
    twitterUsername
  } = site.siteMetadata

  const seo = {
    lang: lang,
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
    image: socialImage,
    keywords
  }

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en'
      }}
      title={seo.title}
    >
      <meta name="description" content={seo.description} />
      {seo.image && <meta name="image" content={seo.image} />}
      <meta name="keywords" content={seo.keywords.join(',')} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool
}

SEO.defaultProps = {
  lang: `en`,
  title: null,
  description: null,
  image: null,
  article: false
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
        keywords
      }
    }
  }
`
