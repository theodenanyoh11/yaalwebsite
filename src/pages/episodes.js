import React from "react"

import Layout from '../components/layout'
import SEO from '../components/seo'

import Pastepisodes from "../components/pastepisodes";
import Latestepisode from "../components/latestepisode";



const Episodes = () => (
  <Layout>
    <SEO title="Home" keywords={[`you are a laywer podcast`, `legal podcast`, `podcast`, `you are a lawyer`, `yaal`,`kyla denanyoh`]} />
    <Latestepisode />
    <Pastepisodes />
  </Layout>

)

export default Episodes
