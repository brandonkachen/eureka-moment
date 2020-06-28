import React, { Component } from "react"

import Layout from "components/layout"
import SEO from "components/seo"
import IDEStyle from "components/mdx-styles/ide"

import { Link, navigate } from "gatsby"

import LessonMD from "./sidebar.mdx"
import Protected from "components/protected"

class Level3Lesson extends Component {
  render() {
    return (
      <Layout styleOverride={{ maxWidth: 1400 }} mdxStyle={IDEStyle}>
        <Protected>
          <SEO title="Level 3" />
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
                    navigate("/lessons/level3", {
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
              title="repl level3"
              width="100%"
              height="100%"
              src="https://repl.it/@brandonchen95/eureka-moment-level3?lite=true"
            ></iframe>
          </div>
        </div>
      </div>
    )
  }
}

export default Level3Lesson
