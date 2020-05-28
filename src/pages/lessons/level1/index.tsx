import React, { Component } from "react"

import Layout from "components/layout"
import SEO from "components/seo"
import { Link } from "gatsby"

import IntroMD from "./intro.mdx"
import OutroMD from "./outro.mdx"

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
        <SEO title="Level 1" />
        {mdxToShow}
        <Link to="/lessons/level1/rpg">Start Lesson</Link>
      </Layout>
    )
  }
}

export default Level1
