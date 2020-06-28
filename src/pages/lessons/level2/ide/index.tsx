import React, { useContext } from "react"

import Layout from "components/layout"
import SEO from "components/seo"
import IDEStyle from "components/mdx-styles/ide"
import UserContext from "components/user-context"

import { Link, navigate } from "gatsby"

import LessonMD from "./sidebar.mdx"
import Protected from "components/protected"

export const Level2Lesson = () => {
  const user = useContext(UserContext)

  if (!user) {
    return null
  }

  var email = user ? user.email.replace(".", "%2E") : ""
  const basePath = "lessons/" + email + "/level0"

  const lesson = () => {
    return (
      <div className="box">
        <div className="columns">
          <div className="column is-two-fifths">
            <div className="overflow">
              <LessonMD baseRef={basePath}></LessonMD>
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

  return (
    <Layout styleOverride={{ maxWidth: 1400 }} mdxStyle={IDEStyle}>
      <SEO title="Level 2" />
      {lesson()}
    </Layout>
  )
}

export default function ProtectedLesson() {
  return (
    <Protected>
      <Level2Lesson />
    </Protected>
  )
}
