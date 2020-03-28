import React from "react"

import Layout from '../components/layout'
import SEO from '../components/seo'

import Pastepisodes from "../components/pastepisodes";
import Latestepisode from '../components/latestepisode'
import Hero from "../components/hero";



const About = () => (
  <Layout>
    <SEO title="Home" keywords={[`you are a laywer podcast`, `legal podcast`, `podcast`, `you are a lawyer`, `yaal`,`kyla denanyoh`]} />
    <Hero />
    <Latestepisode />
    <Pastepisodes />
  </Layout>

)

export default About
