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
        fixed(width:80) {
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
  width:100%;
  max-width: 100%;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
  padding: 0 auto;
 
`

const NavbarWrapper = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 30px;
  flex-direction: row;
  justify-content: center;
  display: flex;
  align-items: center;

 
  @media screen and (max-width: 991px) {
    .wrapper {
      padding-right: 30px;
      padding-left: 30px;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    margin: 0;


`
const NavLinkWrap = styled.div`
    display: flex;
    
`
