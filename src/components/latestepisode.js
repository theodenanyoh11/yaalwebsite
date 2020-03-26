import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled, { keyframes } from 'styled-components'
import Img from 'gatsby-image'
import Logos from "./logos"


const Latestepisode = ({ className }) => {
  
  
  return (
  
      
    <Wrapper>
      <Row>
        <Col>
        <h3>Latest Episode</h3>
        <p>EPISODE 1</p>

        <h2>From Law to Medicine - A conversation with Dr. Joe Poku</h2>
        <Latestespidoebuttongroup>
            <CallSummaryCTA>Call Summary</CallSummaryCTA>
            <TranscriptionCTA>Transcription</TranscriptionCTA>
            
        </Latestespidoebuttongroup>
  
        </Col>

        <Col>
        test
        </Col>

      </Row>
    </Wrapper>
      
   
  )
}

// query



// styles


export default styled(Latestepisode)`
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
  padding: 80px 30px;
  justify-content: center;
  background-color: rgba(255, 111, 11, 0.06);
  
  
`
const CallSummaryCTA = styled.button`
padding: 12px 18px;
background-color: #0d3b66;
margin: 35px 0;
border: none;
color: white;
  
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