import React, { Component } from "react"

import Layout from "components/ide-layout"
import SEO from "components/seo"

import { Link } from "gatsby"

import LessonMD from "./sidebar.mdx"

class Level1 extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Level 1" />
        {this.lesson()}
      </Layout>
    )
  }

  lesson() {
    return (
      <div>
        <div className="columns">
          <div className="column is-one-third">
            <h2>Instructions</h2>
            <div className="overflow">
              <LessonMD></LessonMD>
              <Link
                to={`/lessons/level1`}
                state={{
                  completed: true,
                }}
              >
                Finish
              </Link>
            </div>
          </div>
          <div className="column is-two-thirds">
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
