import React, { Component, useContext } from "react"

import Layout from "components/layout"
import SEO from "components/seo"
import { Link } from "gatsby"
import { navigate } from "gatsby"

import IntroMD from "./intro.mdx"
import LessonMD from "./lesson.mdx"
import OutroMD from "./outro.mdx"
import Protected from "components/protected"
import UserContext from "components/user-context"

export const Level0 = () => {
  const user = useContext(UserContext)

  const baseRef = "lessons/" + user.uid + "/level0"

  return (
    <Layout>
      <SEO title="Level 0" />
      <IntroMD></IntroMD>
      <LessonMD baseRef={baseRef}></LessonMD>
      <OutroMD></OutroMD>
    </Layout>
  )
}

function ProtectedComp() {
  return (
    <Protected>
      <Level0 />
    </Protected>
  )
}

export default ProtectedComp
