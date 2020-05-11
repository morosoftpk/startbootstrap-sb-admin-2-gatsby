import React from 'react'
import { Link } from 'gatsby'

import BlankTemplate from '../components/common/layout/blank-temp'
import Image from '../components/common/image'
import Home from '../components/home'

const IndexPage = () => (
  <BlankTemplate>
    <Home />
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image imgName="person-writing.jpg" />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </BlankTemplate>
)

export default IndexPage
