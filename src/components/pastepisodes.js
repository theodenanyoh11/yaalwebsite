import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled, { keyframes } from 'styled-components'
import Img from 'gatsby-image'



const Pastepisodes = ({ className }) => {
  
  
  return (
  
      
    <Wrapper>
      <Row>
        <Col>
        <h3>Past Episodes</h3>
        <InnerGrid>
            <EpisodeCard>
                <h6> English Breakfast Tea with Tasty Donut</h6>
                <p>At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.
                </p>
            </EpisodeCard>

            <EpisodeCard>
                <h6> English Breakfast Tea with Tasty Donut</h6>
                <p>At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.
                </p>
            </EpisodeCard>

            <EpisodeCard>
                <h6> English Breakfast Tea with Tasty Donut</h6>
                <p>At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.
                </p>
            </EpisodeCard>

            <EpisodeCard>
                <h6> English Breakfast Tea with Tasty Donut</h6>
                <p>At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.
                </p>
            </EpisodeCard>

            <EpisodeCard>
                <h6> English Breakfast Tea with Tasty Donut</h6>
                <p>At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.
                </p>
            </EpisodeCard>

            <EpisodeCard>
                <h6> English Breakfast Tea with Tasty Donut</h6>
                <p>At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.
                </p>
            </EpisodeCard>
            
        </InnerGrid>
                 
        </Col>

        

      </Row>
    </Wrapper>
      
   
  )
}

// query



// styles


export default styled(Pastepisodes)`
  height: 920px;
  background-size: cover;
  background-position: center;
  position: relative;
  background-color: rgba(0,0,0, 0.5) !important;
  opacity: 1 !important;
`
const Wrapper = styled.div`
  display:block;
  width:100%;
  max-width: 1170px;
  margin: 30px auto;
  padding: 80px 30px;
  justify-content: center;

  
`
const Row = styled.div`
  display:flex;


`

const Col = styled.div`
  position: relative;
  display:flex;
  overflow: visible;
  padding: 0 15px;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 20px;
 
`
const InnerGrid = styled.div`
    display: grid;
    display: -ms-grid;
    grid-auto-columns: 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 30px
    -ms-grid-columns: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    -ms-grid-row: auto auto;
    grid-template-rows: auto auto;
    width: 100%;
`
const EpisodeCard = styled.div`
    display: block;
`
