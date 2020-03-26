import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import styled from 'styled-components'




const Footer = () => {
  const { 
    links, 
    copyright: { copyrightText, copyrightUrl, copyrightUrlText },
  } = useStaticQuery(getLink)

  return (
    <FooterGroup id='third'>
      
      <LinkGroup>
        {
          links.edges.map(({ node }) => (
            <a key={node.url} href={node.url} target='_blank' rel='noopener noreferrer'>
              {node.title}
            </a>
          ))
        }
      </LinkGroup>
      
      <Copyright>
        <p key={copyrightUrl}>
          {copyrightText} 
          <a href={copyrightUrl} target='_blank' rel='noopener noreferrer'>{copyrightUrlText} </a>
          © {new Date().getFullYear()}
        </p>
      </Copyright>
    </FooterGroup>
  )
}

export default Footer


// query
const getLink = graphql`
  {   
    links: allContentfulFooterLinks {
      edges {
        node {
          url
          title
        }
      }
    }
    copyright: contentfulFooterCopyright {
      copyrightText
      copyrightUrl
      copyrightUrlText
    }
  }
`

// styles
const FooterGroup = styled.div`
  background: #FF6F0B;
  margin: 30px auto;
  padding: 50px 0;
  display: grid;
  grid-gap: 20px;
`


const LinkGroup = styled.div`
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  text-align: center;
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
  a {
    transition: 0.8s;
  }
  a:hover {
    color: black;
  }
`

const Copyright = styled.div`
  color: #485391;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`