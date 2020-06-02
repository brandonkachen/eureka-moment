import React from "react"
import PropTypes from "prop-types"

import firebase from "gatsby-plugin-firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useObject } from "react-firebase-hooks/database"
import { Link } from "gatsby"

import * as ROUTES from "constants/routes"

const errorPage = error => {
  return (
    <div>
      <p>Error: {error}</p>
    </div>
  )
}

const Protected = ({ children }) => {
  const [user, loading, authError] = useAuthState(firebase.auth())
  var email = user ? user.email.replace(".", "%2E") : ""
  const [whitelist, whitelistLoading, whitelistError] = useObject(
    firebase.database().ref("whitelist/" + email)
  )

  // Loading Screen
  if (loading || whitelistLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }

  // Login Error
  if (authError) {
    return errorPage(authError)
  }

  // User Unauthorized Error
  if (whitelistError) {
    if (whitelistError.code === "PERMISSION_DENIED") {
      return (
        <>
          <h1>You are not authorized to view this page.</h1>
          <p>
            Click <Link to={ROUTES.ROOT}>here</Link> to go back to the homepage.
          </p>
        </>
      )
    }
    return errorPage(authError)
  }

  // User Authorized
  if (whitelist) {
    return (
      <>
        <main>{children}</main>
      </>
    )
  }

  // None of the above cases; user must be logged out
  return (
    <div>
      You are not logged in. Click <Link to={ROUTES.ACCOUNT}>here</Link> to do
      so.
    </div>
  )
}

Protected.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Protected
