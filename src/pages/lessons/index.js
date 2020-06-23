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
      </ul>
      <p>
        <span class="emoji" role="img" aria-label="construction-sign">
          🚧🚧🚧
        </span>
      </p>
      <p>
        This page will used to list the lessons users can access, but it is
        under construction right now. Please check back later.{" "}
      </p>
      <p>
        <span class="emoji" role="img" aria-label="construction-sign">
          🚧🚧🚧
        </span>
      </p>{" "}
    </Protected>
  </Layout>
)

export default IndexPage
