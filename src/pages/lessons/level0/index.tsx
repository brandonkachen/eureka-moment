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

// class Level1 extends Component {
//   static contextType = UserContext

//   componentDidMount() {
//     const user = this.context

//     console.log("user")
//     console.log(user)
//   }

//   render() {
//     return (
//       <Layout>
//         {/* <Protected> */}
//         <SEO title="Level 0" />
//         <IntroMD></IntroMD>
//         <LessonMD email={user.email} level="/level0"></LessonMD>
//         <OutroMD></OutroMD>
//         {/* </Protected> */}
//       </Layout>
//     )
//   }
// }

export const Level1 = () => {
  const user = useContext(UserContext)

  return (
    <Layout>
      {/* <Protected> */}
      <SEO title="Level 0" />
      <IntroMD></IntroMD>
      <LessonMD email={user.email} level="/level0"></LessonMD>
      <OutroMD></OutroMD>
      {/* </Protected> */}
    </Layout>
  )
}

function ProtectedComp() {
  return (
    <Protected>
      <Level1 />
    </Protected>
  )
}

export default ProtectedComp
