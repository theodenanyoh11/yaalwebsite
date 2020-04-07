import React from "react"

import SEO from '../components/common/layout/seo'

import Pastepisodes from '../components/sections/pastepisodes'
import Latestepisode from '../components/sections/latestepisode'
import Hero from '../components/sections/hero'



const Index = () => (
  <>
    <SEO title="Home" keywords={[`you are a laywer podcast`, `legal podcast`, `podcast`, `you are a lawyer`, `yaal`,`kyla denanyoh`]} />
    <Hero />
    <Latestepisode />
    <Pastepisodes />
</>
)

export default Index