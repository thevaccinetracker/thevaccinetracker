import * as React from "react";
import { useLocation } from "@reach/router";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
// @ts-ignore
import socialImage from "../assets/images/Logo-white-bg.png";

export interface SEOProps {
  title: string,
  description?: string,
  image?: string,
  article?: boolean;
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
`;

const SEO = (props: SEOProps) => {
  const { title, article, description, image } = props;
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);
  const {
    defaultTitle,
    defaultDescription,
    keywords,
    siteUrl,
    twitterUsername
  } = site.siteMetadata;
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
    image: socialImage,
    keywords
  };
  return (
    <Helmet title={seo.title}>
      <html lang="en"/>
      <meta name="description" content={seo.description}/>
      {seo.image && <meta name="image" content={seo.image}/>}
      <meta name="keywords" content={seo.keywords.join(",")}/>
      {seo.url && <meta property="og:url" content={seo.url}/>}
      {(article ? true : null) && <meta property="og:type" content="article"/>}
      {seo.title && <meta property="og:title" content={seo.title}/>}
      {seo.description && (
        <meta property="og:description" content={seo.description}/>
      )}
      {seo.image && <meta property="og:image" content={seo.image}/>}
      <meta name="twitter:card" content="summary_large_image"/>
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername}/>
      )}
      {seo.title && <meta name="twitter:title" content={seo.title}/>}
      {seo.description && (
        <meta name="twitter:description" content={seo.description}/>
      )}
      {seo.image && <meta name="twitter:image" content={seo.image}/>}
    </Helmet>
  );
};
export default React.memo(SEO);
