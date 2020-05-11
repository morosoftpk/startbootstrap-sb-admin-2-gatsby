import React from 'react'
import { Link } from 'gatsby'

import BlankTemplate from '../components/common/layout/blank-temp'
import Image from '../components/common/image'

const IndexPage = () => (
  <BlankTemplate>
    <h1>Hi people - Gitlab CI/CD </h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </BlankTemplate>
)

export default IndexPage
