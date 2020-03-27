import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import styled from 'styled-components'


const Navbar = () => {


  const {
    navbarLogo: { logoUrl, logo },
    navbarLinks
  } = useStaticQuery(getNavbar)

  return (
    <Nav>
      <NavbarWrapper>
          <LogoWrap>
            <Link to={logoUrl}>
                <Img
                  fixed={logo.fixed}
                  alt='main logo'
                />
            </Link>
          </LogoWrap>
          <NavbarGroup>
            <NavLinkWrap>
                  {navbarLinks.edges.map(({ node }) => (
                    <Link 
                      key={node.id}
                      to={node.navbarItemUrl}
                    >
                      {node.navbarItemText}
                    </Link>
                  ))}
            </NavLinkWrap>
          </NavbarGroup>
      </NavbarWrapper>
    </Nav>
  )
}

export default Navbar


// query
const getNavbar = graphql`
  {
    navbarLogo: contentfulNavbarLogo {
      logoUrl
      logo {
        fixed(width:100) {
          ...GatsbyContentfulFixed
        }
      }
    }
    navbarLinks: allContentfulNavbarLinks(sort: {fields: createdAt}) {
      edges {
        node {
          id
          navbarItemUrl
          navbarItemText
        }
      }
    }
  }
`

// styles
const Nav = styled.nav`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: transparent;
`

const NavbarWrapper = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 30px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;

 
  @media (max-width: 640px) {
    padding: 15px 0;
  }
  /* Inner links */
  
  
`

const NavbarGroup = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, auto);
  align-items: center;
  justify-items: center;
  grid-gap: 10px;
  .gatsby-image-wrapper {
    width: 30px !important;
    height: 30px !important;
  }
`

const LogoWrap = styled.div`
    postion: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
`
const NavLinkWrap = styled.div`
    display: flex;
    
`
