import React from 'react'

import Layout from '../components/common/layout'
import SEO from '../components/common/seo'
import Sidebar from '../components/common/sidebar'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container-fluid">
      {/* <!-- 404 Error Text --> */}
      <div className="text-center">
        <div className="error mx-auto" data-text="404">404</div>
        <p className="lead text-gray-800 mb-5">Page Not Found</p>
        <p className="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
        <a href="ifndex.html">&larr; Back to Dashboard</a>
      </div>

    </div>
  </Layout>
)

export default NotFoundPage
