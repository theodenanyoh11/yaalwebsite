import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled, { keyframes } from 'styled-components'
import Img from 'gatsby-image'
import Logos from "./logos"


const Hero = ({ className }) => {
  const { 
    hero: { image, title, subtitle }
  } = useStaticQuery(getHero)
  
  return (
  
      
    <Wrapper>
      <Row>
        <Col>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <SubscribeCTA>Subscribe & listen</SubscribeCTA>
        <Logos />
        </Col>

        <Col>
        <Img
          fixed={image.fixed}
          alt={`Hero Image`}
        />
        </Col>

      </Row>
    </Wrapper>
      
   
  )
}

// query
const getHero = graphql`
  {
    hero: contentfulHero {
      image {
        fixed (width:542) {
          ...GatsbyContentfulFixed
        }
      }
      title
      subtitle
    }
  }
`


// styles
export const heroAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);  /* starts down and goes up */
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

export default styled(Hero)`
  height: 920px;
  background-size: cover;
  background-position: center;
  position: relative;
  background-color: rgba(0,0,0, 0.5) !important;
  opacity: 1 !important;
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
  display:block;
  width:100%;
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 30px;
  justify-content: center;
  
`
const SubscribeCTA = styled.button`
padding: 12px 18px;
background-color: #0d3b66;
margin: 35px 0;
border: none;
color: white;
  
`
