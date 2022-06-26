import React from 'react'
import { Link } from 'gatsby'

import Layout from '@components/Layout'

const NotFound = () => (
  <Layout>
    <div className="h-96 py-10">
      <h1>Page not found</h1>
      <Link className="text-blue-500 hover:text-blue-700" to="/">
        Head home
      </Link>
    </div>
  </Layout>
)

export default NotFound
