/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { GlobalStyle } from '../../../utils/globalStyles'

import Navbar from '../navigation/navigation'
import Footer from '../navigation/footer'

const Layout = ({ children }) => {
  

  return (
    <>
        
        <GlobalStyle />
        <Navbar />
        {children}
        <Footer />
     
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
