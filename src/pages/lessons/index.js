import React from "react"
import { Link } from "gatsby"

import Layout from "components/layout"
import Image from "components/image"
import SEO from "components/seo"
import Protected from "components/protected"
import * as ROUTES from "constants/routes"

const IndexPage = () => (
  <Layout>
    <Protected>
      <SEO title="Home" />
      <h1>Lessons</h1>
      <ul>
        <li>
          <Link to={ROUTES.LESSONS_SAMPLE}>Sample lesson</Link>
        </li>
        <li>
          <Link to={ROUTES.LESSONS_LEVEL0}>Level 0</Link>
        </li>
        <li>
          <Link to={ROUTES.LESSONS_LEVEL1}>Level 1</Link>
        </li>
        <li>
          <Link to={ROUTES.LESSONS_LEVEL2}>Level 2</Link>
        </li>
      </ul>
    </Protected>
  </Layout>
)

export default IndexPage
