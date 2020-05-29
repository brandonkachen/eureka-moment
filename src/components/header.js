import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      borderBottom: "MintCream solid 3px",
      height: "60px",
      backgroundColor: "MediumAquamarine",
      position: "relative",
      marginBottom: `1.45rem`,
    }}
  >
    <nav className="level">
      <div className="level-item has-text-centered navbar-item has-dropdown is-hoverable">
        <h1
          className="title"
          style={{ margin: 10, textAlign: "center", color: "Ivory" }}
        >
          Eureka!
          <div className="container">
            <div className="navbar-dropdown">
              <a className="navbar-item" href={"/"}>
                Home
              </a>
              <a className="navbar-item" href={"ACCOUNT"}>
                Account
              </a>
              <a className="navbar-item" href={"ADMIN"}>
                Tests
              </a>
              <a className="navbar-item" href={"ADMIN"}>
                Lessons
              </a>
            </div>
          </div>
        </h1>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
