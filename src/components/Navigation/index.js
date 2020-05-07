import React from "react";
// import { Link } from 'react-router-dom';

import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../Session";

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {(authUser) => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
          alt=""
        ></img>
      </a>

      {/* eslint-disable-next-line */}
      <a
        role="button"
        className="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item" href={ROUTES.LANDING}>
          Landing
        </a>

        <a className="navbar-item" href={ROUTES.HOME}>
          Home
        </a>

        <div className="navbar-item has-dropdown is-hoverable">
          {/* eslint-disable-next-line */}
          <a className="navbar-link">More</a>

          <div className="navbar-dropdown">
            <a className="navbar-item" href={ROUTES.ACCOUNT}>
              Account
            </a>
            <a className="navbar-item" href={ROUTES.ADMIN}>
              Admin
            </a>
          </div>
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <SignOutButton />
        </div>
      </div>
    </div>
  </nav>
);

const NavigationNonAuth = () => (
  <nav className="level">
    <div className="level-item has-text-centered">
      <a className="navbar-item" href={ROUTES.STUDENT_TESTS}>
        Tests
      </a>
    </div>
    <div className="level-item has-text-centered">
      <div className="container">
        {/* <canvas id="canvasZero" height="90px" width="250px"></canvas> */}
        <h1 className="title">Eureka!</h1>
      </div>
    </div>
    <div className="level-item has-text-centered">
      <a className="navbar-item" href={ROUTES.ACCOUNT}>
        Account
      </a>
    </div>
  </nav>

  // <nav className="navbar" role="navigation" aria-label="main navigation">
  //   <div className="navbar-brand">
  //     <a className="navbar-item" href={ROUTES.LANDING}>
  //       Eureka!
  //       {/* <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt=""></img> */}
  //     </a>

  //     {/* eslint-disable-next-line */}
  //     <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
  //       <span aria-hidden="true"></span>
  //       <span aria-hidden="true"></span>
  //       <span aria-hidden="true"></span>
  //     </a>
  //   </div>

  //   <div id="navbarBasicExample" className="navbar-menu">
  //     <div className="navbar-start">
  //       <a className="navbar-item" href={ROUTES.LANDING}>
  //         Landing
  //       </a>

  //       <a className="navbar-item" href={ROUTES.LESSON_SAMPLE}>
  //         Sample Lesson
  //       </a>
  //     </div>

  //     <div className="navbar-end">
  //       <a className="navbar-item" href={ROUTES.SIGN_IN}>
  //         <button className="button is-primary" type="button" >
  //           Sign In
  //         </button>
  //       </a>
  //     </div>
  //   </div>
  // </nav>
);

export default Navigation;
