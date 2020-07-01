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
      baseRef?: string
    }
  }
}

interface IState {}

class Level2 extends Component<IProps, IState> {
  render() {
    var { location } = this.props

    const mdxToShow =
      location.state && location.state.completed ? (
        <OutroMD baseRef={location.state.baseRef}></OutroMD>
      ) : (
        <IntroMD></IntroMD>
      )
    return (
      <Layout>
        <Protected>
          <SEO title="Level 2" />
          {mdxToShow}
          <div className="has-text-centered">
            <button
              className="button is-info is-light"
              onClick={() => navigate("/lessons/level2/ide")}
            >
              Lesson
            </button>
          </div>
        </Protected>
      </Layout>
    )
  }
}

export default Level2
