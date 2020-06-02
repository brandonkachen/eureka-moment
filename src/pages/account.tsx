import React from "react"
import { PageProps, Link } from "gatsby"

import firebase from "gatsby-plugin-firebase"
import { useAuthState } from "react-firebase-hooks/auth"

import Layout from "components/layout"
import SEO from "components/seo"

const login = () => {
  firebase
    .auth()
    .signInWithEmailAndPassword("brandonchenjiacheng@gmail.com", "testing123")
}
const logout = () => {
  firebase.auth().signOut()
}

const CurrentUser = () => {
  const [user, loading, error] = useAuthState(firebase.auth())

  if (loading) {
    return (
      <div>
        <p>Initialising User...</p>
      </div>
    )
  }
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    )
  }
  if (user) {
    return (
      <div>
        <p>Current User: {user.email}</p>
        <button onClick={logout}>Log out</button>
      </div>
    )
  }
  return <button onClick={login}>Log in</button>
}

const AccountPage = (props: PageProps) => (
  <Layout>
    <SEO title="Account" />
    <h1>Log into your account</h1>
    <CurrentUser></CurrentUser>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AccountPage
// export default CurrentUser
