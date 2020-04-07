import React from "react"

import SEO from '../components/common/layout/seo'
import Pastepisodes from '../components/sections/pastepisodes'
import Latestepisode from '../components/sections/latestepisode'



const Episodes = () => (
  <>
    <SEO title="Home" keywords={[`you are a laywer podcast`, `legal podcast`, `podcast`, `you are a lawyer`, `yaal`,`kyla denanyoh`]} />
    <Latestepisode />
    <Pastepisodes />
  </>

)

export default Episodes
