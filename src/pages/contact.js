import React from "react"

import Layout from '../components/layout'
import SEO from '../components/seo'

import Pastepisodes from "../components/pastepisodes";



const Contact = () => (
  <Layout>
    <SEO title="Home" keywords={[`you are a laywer podcast`, `legal podcast`, `podcast`, `you are a lawyer`, `yaal`,`kyla denanyoh`]} />
 
    <Pastepisodes />
  </Layout>

)

export default Contact
