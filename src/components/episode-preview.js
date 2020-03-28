import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'


export default ({ episode }) => (
  <div>
    <Img alt="" fluid={episode.heroImage.fluid} />
    <h3>
      <Link to={`/blog/${episode.slug}`}>{episode.title}</Link>
    </h3>
    <p>{episode.publishDate}</p>
    <p
      dangerouslySetInnerHTML={{
        __html: episode.summary.childMarkdownRemark.html,
      }}
    />
  </div>
)