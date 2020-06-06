import React, { Component } from "react"

import Layout from "components/layout"
import SEO from "components/seo"
import IDEStyle from "components/mdx-styles/ide"

import { Link, navigate } from "gatsby"

import LessonMD from "./sidebar.mdx"
import Protected from "components/protected"

class Sample extends Component {
  render() {
    return (
      <Layout styleOverride={{ maxWidth: 1400 }} mdxStyle={IDEStyle}>
        <Protected>
          <SEO title="Sample Level" />
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
                    navigate("/lessons/sample", {
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
              title="repl sample"
              width="100%"
              height="100%"
              src="https://repl.it/@brandonchen95/eureka-moment-sample?lite=true"
            ></iframe>
          </div>
        </div>
      </div>
    )
  }
}

export default Sample
