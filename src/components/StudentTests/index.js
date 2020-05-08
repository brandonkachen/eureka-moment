import React, { Component } from "react";
import { Route } from "react-router-dom";
import { withAuthentication } from "../Session";
import aComp from "../Utilities/AsyncComponent";
import { Link } from "react-router-dom";

import "./index.css";
import * as ROUTES from "./routes";

const PreTestPage = aComp(() => import("./pretest.js"));

class StudentTests extends Component {
  constructor(props) {
    super(props);
    // this.state = { noTestLoaded: true };
    this.state = { noTestLoaded: false };
  }

  handleLinkClick = () => {
    // this.setState((state) => ({
    //   noTestLoaded: !state.noTestLoaded,
    // }));
  };

  listOfRoutes() {
    return (
      <ul>
        <li>
          <Link to={ROUTES.PRE_TEST} onClick={this.handleLinkClick}>
            Pre-Test
          </Link>
        </li>
      </ul>
    );
  }

  render() {
    const showRoutes = this.state.noTestLoaded;
    return (
      <div>
        <Route path={ROUTES.PRE_TEST} component={PreTestPage} />
        {showRoutes && this.listOfRoutes()}
      </div>
    );
  }
}

export default withAuthentication(StudentTests);
