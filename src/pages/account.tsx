import React, { useState } from "react"
import { PageProps, Link } from "gatsby"

import firebase from "gatsby-plugin-firebase"
import { useAuthState } from "react-firebase-hooks/auth"

import Layout from "components/layout"
import SEO from "components/seo"

const login = ({ email, password }) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
}
const logout = () => {
  firebase.auth().signOut()
}
const CurrentUser = () => {
  const [user, loading, error] = useAuthState(firebase.auth())

  const handleSubmit = event => {
    event.preventDefault()
    const email = event.target.elements.email.value
    const password = event.target.elements.password.value

    if (password === "" || email === "") {
      alert("Invalid username/password")
    } else {
      login({
        email: email,
        password: password,
      })
    }
  }

  // loading user
  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }

  // error authenticating user
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    )
  }

  // user is logged in
  if (user) {
    return (
      <div>
        <p>Current User: {user.email}</p>
        <button onClick={logout}>Log out</button>
      </div>
    )
  }

  // user is not logged in
  return (
    <form onSubmit={handleSubmit} method="post">
      <input name="email" type="text" placeholder="Email Address" />
      <input name="password" type="password" placeholder="Password" />
      <button type="submit">Sign In</button>
    </form>
  )
}

const AccountPage = (props: PageProps) => (
  <Layout>
    <SEO title="Account" />
    <h1>Log into your account</h1>
    <CurrentUser></CurrentUser>
    <p>
      Go back to the <Link to="/">homepage</Link>.
    </p>
  </Layout>
)

export default AccountPage
