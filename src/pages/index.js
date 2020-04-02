import React from "react"

import Layout from '../components/common/layout/layout'
import SEO from '../components/common/layout/seo'

import Pastepisodes from '../components/sections/pastepisodes'
import Latestepisode from '../components/sections/latestepisode'
import Hero from '../components/sections/hero'



const Index = () => (
  <Layout>
    <SEO title="Home" keywords={[`you are a laywer podcast`, `legal podcast`, `podcast`, `you are a lawyer`, `yaal`,`kyla denanyoh`]} />
    <Hero />
    <Latestepisode />
    <Pastepisodes />
  </Layout>

)

export default Index