import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'


const LatestEpisode = () => {

  const {
    latestEpisode: { episodeNumber, title, slug, heroImage },
  } = useStaticQuery(getLatestEpisode)


  return (
    <Wrapper>
      <Row>
        <Col>
        <Img
          fixed={heroImage.fixed}
          alt={`Hero Image`}
        />
        </Col>
        <Col>
            <h3>Latest Episode</h3>
            <Link to={slug}>
            <p>{episodeNumber}</p>
            <h2>{title}</h2>
            
            </Link>
           
            <Latestespidoebuttongroup>
                
                <CallSummaryCTA href={slug}>Listen now!</CallSummaryCTA>
                
            </Latestespidoebuttongroup>
        </Col>
    </Row>
  </Wrapper>
  )
}

export default LatestEpisode



// query  <p>{episodeNumber}</p>
const getLatestEpisode = graphql`
{
  latestEpisode: contentfulEpisodePost {
    episodeNumber
    title
    slug
    heroImage {
      fixed (height: 400) {
        ...GatsbyContentfulFixed
      }
    }
  }
}
`

const Row = styled.div`
  display:grid;
  margin: 0 -15px;
  flex-wrap: wrap;
  grid-auto-columns: 1fr;
  grid-column-gap: 15px;
  grid-row-gap: 16px;
  grid-template-columns: 1fr 1fr;
  grid-template-row: auto;
`

const Col = styled.div`
  position: relative;
  display:flex;
  overflow: visible;
  padding: 0 15px;
  flex-direction: column;
  align-items: flex-start;
  max-width: 540px;
  margin: 0 20px;
 `

const Wrapper = styled.div`
  display:flex;
  width:100%;
  max-width: 1170px;
  margin: 0 auto;
  padding: 80px 30px;
  justify-content: center;
  background-color: rgba(255, 111, 11, 0.06);
`
const CallSummaryCTA = styled.a`
padding: 12px 24px;
background-color: #0d3b66;
margin: 15px 0;
border: none;
color: white;
justify-self: center;
`
const TranscriptionCTA = styled.button`
padding: 12px 18px;
background-color: transparent;
margin: 35px 0;
border: none;
color: #0d3b66;
border: 1px solid #0D3B66;
box-sizing: border-box;
`

const Latestespidoebuttongroup = styled.div`
display: -ms-grid;
display: grid;
grid-auto-columns: 1fr;
grid-column-gap: 16px;
grid-row-gap: 16px;
-ms-grid-columns: 1fr 1fr 1fr;
grid-template-columns: 1fr 1fr 1fr;
-ms-grid-rows: auto;
grid-template-rows: auto; 
`
