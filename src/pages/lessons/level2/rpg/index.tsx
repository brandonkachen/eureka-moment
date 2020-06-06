import React, { Component } from "react"

import Layout from "components/layout"
import SEO from "components/seo"
import IDEStyle from "components/mdx-styles/ide"

import { Link, navigate } from "gatsby"

import LessonMD from "./sidebar.mdx"
import Protected from "components/protected"

class Level2 extends Component {
  render() {
    return (
      <Layout styleOverride={{ maxWidth: 1400 }} mdxStyle={IDEStyle}>
        <Protected>
          <SEO title="Level 2" />
          {this.lesson()}
        </Protected>
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
                    navigate("/lessons/level2", {
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
              title="repl level2"
              width="100%"
              height="100%"
              src="https://repl.it/@brandonchen95/eureka-moment-level2?lite=true"
            ></iframe>
          </div>
        </div>
      </div>
    )
  }
}

export default Level2
