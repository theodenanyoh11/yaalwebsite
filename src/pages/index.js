import React from "react"

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero';
import Latestepisode from "../components/latestepisode";


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`you are a laywer podcast`, `legal podcast`, `podcast`, `you are a lawyer`, `yaal`,`kyla denanyoh`]} />
    <Hero />
    <Latestepisode />
  </Layout>

)

export default IndexPage
