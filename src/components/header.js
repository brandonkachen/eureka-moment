import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import * as ROUTES from "constants/routes"

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
          Eureka Moment
          <div className="container">
            <div className="navbar-dropdown">
              <Link className="navbar-item" to={ROUTES.ROOT}>
                Home
              </Link>
              <Link className="navbar-item" to={ROUTES.ACCOUNT}>
                Account
              </Link>
              <Link className="navbar-item" to={ROUTES.TESTS}>
                Tests
              </Link>
              <Link className="navbar-item" to={ROUTES.LESSONS}>
                Lessons
              </Link>
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
