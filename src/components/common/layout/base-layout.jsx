import React from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Georgia'
  }
`

const theme = {
  colors: {

    primary: '#4e73df',
    secondary: '#858796',
    success: '#1cc88a',
    info: '#36b9cc',
    warning: '#f6c23e',
    danger: '#e74a3b',
    light: '#f8f9fa',
    dark: '#5a5c69',

    white: ' #fff',
    gray100: '#f8f9fa',
    gray200: '#e9ecef',
    gray300: '#dddfeb',
    gray400: '#d1d3e2',
    gray500: '#b7b9cc',
    gray600: '#858796',
    gray700: '#6e707e',
    gray800: '#5a5c69',
    gray900: '#3a3b45',
    black: '#000',

    blue: '#4e73df',
    indigo: '#6610f2',
    purple: '#6f42c1',
    pink: '#e83e8c',
    red: '#e74a3b',
    orange: '#fd7e14',
    yellow: '#f6c23e',
    green: '#1cc88a',
    teal: '#20c9a6',
    cyan: '#36b9cc',
    borderColor: '#e9ecef',
  },
  spacing: {
    topbarBaseHeight: '4.375rem',
    sidebarBaseWidth: '14rem',
    gridGutterWidth: '1rem * 1.5',
    sidebarCollapsedWidth: ' 6.5rem',

  },
}

const BaseLayout = ({ children }) => (
  <>
    <GlobalStyle theme="yellow" />
    <ThemeProvider theme={theme}>
      <main className="site-cont">{children}</main>
    </ThemeProvider>
  </>
)

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BaseLayout
