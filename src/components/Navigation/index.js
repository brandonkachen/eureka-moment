import React from 'react';
// import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt=""></img>
      </a>

      {/* eslint-disable-next-line */}
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href={ROUTES.LANDING}>
          Landing
        </a>

        <a class="navbar-item" href={ROUTES.HOME}>
          Home
        </a>

        <div class="navbar-item has-dropdown is-hoverable">
          {/* eslint-disable-next-line */}
          <a class="navbar-link">
            More
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item" href={ROUTES.ACCOUNT}>
              Account
            </a>
            <a class="navbar-item" href={ROUTES.ADMIN}>
              Admin
            </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <SignOutButton />
        </div>
      </div>
    </div>
  </nav>
);
 
const NavigationNonAuth = () => (
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href={ROUTES.LANDING}>
        Eureka!
        {/* <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt=""></img> */}
      </a>

      {/* eslint-disable-next-line */}
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href={ROUTES.LANDING}>
          Landing
        </a>

        <a class="navbar-item" href={ROUTES.LESSON_SAMPLE}>
          Sample Lesson
        </a>
      </div>

      <div class="navbar-end">
        <a class="navbar-item" href={ROUTES.SIGN_IN}>
          <button className="button is-primary" type="button" >
            Sign In
          </button>
        </a>
      </div>
    </div>
  </nav>
);


export default Navigation;