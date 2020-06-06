import React, { Component } from "react"

import Layout from "components/layout"
import SEO from "components/seo"
import { Link } from "gatsby"
import { navigate } from "gatsby"

import IntroMD from "./intro.mdx"
import OutroMD from "./outro.mdx"
import Protected from "components/protected"

interface IProps {
  location: {
    state: {
      completed?: boolean
    }
  }
}

interface IState {}

class Level1 extends Component<IProps, IState> {
  render() {
    var { location } = this.props

    const mdxToShow =
      location.state && location.state.completed ? (
        <OutroMD></OutroMD>
      ) : (
        <IntroMD></IntroMD>
      )
    return (
      <Layout>
        <Protected>
          <SEO title="Level 1" />
          {mdxToShow}
          <div className="has-text-centered">
            <button
              className="button is-info is-light"
              onClick={() => navigate("/lessons/level1/ide")}
            >
              Start Lesson
            </button>
          </div>
        </Protected>
      </Layout>
    )
  }
}

export default Level1
