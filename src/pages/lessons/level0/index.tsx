import React, { Component } from "react"

import Layout from "components/layout"
import SEO from "components/seo"
import { Link } from "gatsby"
import { navigate } from "gatsby"

import IntroMD from "./intro.mdx"
import LessonMD from "./lesson.mdx"
import OutroMD from "./outro.mdx"
import Protected from "components/protected"

class Level1 extends Component {
  render() {
    return (
      <Layout>
        <Protected>
          <SEO title="Level 0" />
          <IntroMD></IntroMD>
          <LessonMD></LessonMD>
          <OutroMD></OutroMD>
        </Protected>
      </Layout>
    )
  }
}

export default Level1
