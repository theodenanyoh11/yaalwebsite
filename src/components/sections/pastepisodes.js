import React from "react"
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'


const Pastepisodes = () => {
  const { pastEpisodes } = useStaticQuery(getPastEpisodes)
 
  return (

    <Wrapper>
      <Row>
        <Col>
        <h3>Past Episodes</h3>
        <InnerGrid>
          {pastEpisodes.edges.map(({node}) => (
            <Card key={node.id}>
              <Link to={node.slug}>
                <Img
                fluid={node.heroImage.fluid}
                alt={`${node.title} card`}
              />
            <h6>{node.title}</h6>
          
                      <div
                                  dangerouslySetInnerHTML={{
              __html: node.summary.childMarkdownRemark.excerpt,
            }}
          />
              </Link>
            </Card>
         
            ))}
            
        </InnerGrid>               
        </Col>
      </Row>
    </Wrapper>
      
   
  )
}

// query
const getPastEpisodes = graphql`
{
  pastEpisodes: allContentfulEpisodePost {
    edges {
      node {
        id
        title
        publishDate
        slug
        summary {
          childMarkdownRemark {
            html
            excerpt
          } 
        }
        heroImage {
          fluid(maxWidth: 450) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
}
`



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
  postion: relative;


`

const Col = styled.div`
  position: relative;
  display:flex;
  overflow: visible;
  padding: 0 15px;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 20px;
  width: 100%
 
`
const InnerGrid = styled.div`
    display: grid;
    display: -ms-grid;
    grid-auto-columns: 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 30px
    -ms-grid-columns: 1fr 1fr 1fr 1fr; 
    grid-template-columns: 1fr 1fr 1fr 1fr;
    -ms-grid-row: auto auto;
    grid-template-rows: auto auto;
    width: 100%;
`
const Card = styled.div`
    display: block;
    height: 100%;
      p{

      }


`