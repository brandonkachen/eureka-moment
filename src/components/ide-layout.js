/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { MDXProvider } from "@mdx-js/react"

import * as DesignSystem from "./design-system"
import Header from "./header"
import "./ide-layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle="test" />
      <MDXProvider
        components={{
          // Map HTML element tag to React component
          h1: DesignSystem.H1,
          a: DesignSystem.ExternalLink,
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1400,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </MDXProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
