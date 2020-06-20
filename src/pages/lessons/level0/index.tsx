import React, { useContext } from "react"

import Layout from "components/layout"
import SEO from "components/seo"
import { useList } from "react-firebase-hooks/database"
import firebase from "gatsby-plugin-firebase"

import IntroMD from "./intro.mdx"
import LessonMD from "./lesson.mdx"
import OutroMD from "./outro.mdx"
import Protected from "components/protected"
import UserContext from "components/user-context"

export const Level0 = () => {
  const user = useContext(UserContext)

  const basePath = "lessons/" + user.uid + "/level0"

  const [snapshots, loading, error] = useList(
    firebase.database().ref(basePath + "/answers")
  )

  return (
    <Layout>
      <SEO title="Level 0" />
      <IntroMD></IntroMD>
      <LessonMD baseRef={basePath}></LessonMD>
      {/* <LessonMD baseRef={basePath} snapshots={snapshots}></LessonMD> */}
      <OutroMD></OutroMD>
    </Layout>
  )
}

export default function ProtectedComp() {
  return (
    <Protected>
      <Level0 />
    </Protected>
  )
}
