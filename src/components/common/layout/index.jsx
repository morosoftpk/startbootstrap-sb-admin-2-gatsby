import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import BaseLayout from './base-layout'
import Header from '../header'
import Footer from '../footer'
import Sidebar from '../sidebar'

const Container = styled.div`
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  #wrapper {
    display: flex;
  }
  
  #wrapper #content-wrapper {
    background-color: #f8f9fc;
    width: 100%;
    overflow-x: hidden;
  }
  
  #wrapper #content-wrapper #content {
    flex: 1 0 auto;
  }
  
`
const Content = styled.div`
  flex-grow: 1;
`
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
        <Container>

          <Content>
            <div id="wrapper">

              <Sidebar />
              <div id="content-wrapper" className="d-flex flex-column">
                <Header siteTitle={data.site.siteMetadata.title} />
                {children}
              </div>
            </div>
          </Content>
          <Footer />
        </Container>
      </BaseLayout>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
