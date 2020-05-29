import React, { Component } from "react"

import Layout from "components/layout"
import SEO from "components/seo"
import IDEStyle from "components/mdx-styles/ide"

import { Link, navigate } from "gatsby"

import LessonMD from "./sidebar.mdx"

class Level1 extends Component {
  render() {
    return (
      <Layout styleOverride={{ maxWidth: 1400 }} mdxStyle={IDEStyle}>
        <SEO title="Level 1" />
        {this.lesson()}
      </Layout>
    )
  }

  lesson() {
    return (
      <div className="box">
        <div className="columns">
          <div className="column is-two-fifths">
            <div className="overflow">
              <LessonMD></LessonMD>
              <div className="has-text-centered">
                <button
                  className="button is-success is-light"
                  onClick={() =>
                    navigate("/lessons/level1", {
                      state: { completed: true },
                    })
                  }
                >
                  Finish
                </button>
              </div>
            </div>
          </div>
          <div className="column">
            <iframe
              title="repl level1"
              width="100%"
              height="100%"
              src="https://repl.it/@brandonchen95/eureka-moment-level1?lite=true"
            ></iframe>
          </div>
        </div>
      </div>
    )
  }
}

export default Level1
