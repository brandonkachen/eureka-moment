import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import * as ROUTES from "constants/routes"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home Page</h1>
    <div style={{ maxWidth: `1000px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>
      <span class="emoji" role="img" aria-label="construction-sign">
        🚧🚧🚧
      </span>
    </p>
    <p>We're under construction right now, please check back later. </p>
    <p>
      <span class="emoji" role="img" aria-label="construction-sign">
        🚧🚧🚧
      </span>
    </p>{" "}
    <p>
      If you're an alpha tester, click <Link to={ROUTES.ACCOUNT}>here</Link> to
      sign in.
    </p>
  </Layout>
)

export default IndexPage
