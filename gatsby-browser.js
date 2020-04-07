/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react'
import './src/components/common/layout/layout'
import { GlobalStyle } from './src/utils/globalStyles'
import Layout from './src/components/common/layout/layout'

export const wrapRootElement = ({element}) => (
    <>
        <GlobalStyle />
        <Layout>
            {element}        
        </Layout> 
    </>
)