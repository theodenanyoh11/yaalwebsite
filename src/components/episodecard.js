  
import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

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
const Card = styled.div`
    display: block;
`

const EpisodeCard = ({ episode }) => {
    return (
      <InnerGrid>
        <Card>         
              <Link to={episode.slug}>
                <h2>{episode.title}</h2>
                <h3>{episode.summary}</h3>
              </Link>
              <p>Posted by Minimal Blog on {episode.date}</p>
            
            <hr />
        </Card>
      </InnerGrid>
    )
  }
  
  export default EpisodeCard

