import React from "react"
import Helmet from "react-helmet"


function SEO({ description, lang, meta, keywords, title,subtitle, author, url }) {

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={`Walid Khaladi - ${subtitle}`}
      
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:author`,
          content: author,
        },
        {
          property: `og:url`,
          content: url,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: `https://pbs.twimg.com/media/D3zhgNKX4AYdMHH.jpg:large`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `fr`,
  meta: [],
  keywords: [],
}

export default SEO
