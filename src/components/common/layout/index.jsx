import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import BaseLayout from './base-layout'
import Header from '../header'
import Footer from '../footer'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <BaseLayout>
        <Header siteTitle={data.site.siteMetadata.title} />
        {children}
        <Footer />
      </BaseLayout>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
