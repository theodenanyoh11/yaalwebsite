import React from "react"

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero';


const IndexPage = () => (
  <Layout>
    <SEO title="You are a Lawyer Podcast" keywords={[`you are a laywer podcast`, `legal podcast`, `podcast`, `you are a lawyer`, `yaal`,`kyla denanyoh`]} />
    <Hero />
  </Layout>
)

export default IndexPage
