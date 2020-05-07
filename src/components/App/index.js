import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withAuthentication } from '../Session';
import aComp from '../Utilities/AsyncComponent';

import * as ROUTES from '../../constants/routes';

const Navigation = aComp(() => import('../Navigation')) ;
const LandingPage = aComp(() => import('../Landing')) ;
const SignUpPage = aComp(() => import('../SignUp')) ;
const SignInPage = aComp(() => import('../SignIn')) ;
const PasswordForgetPage = aComp(() => import('../PasswordForget')) ;
const HomePage = aComp(() => import('../Home')) ;
const AccountPage = aComp(() => import('../Account')) ;
const AdminPage = aComp(() => import('../Admin')) ;
const SampleLessonPage = aComp(() => import('../Lessons'));
const StudentTestsPage = aComp(() => import('../StudentTests'));

const App = () => (
  <Router>
    <div>
      <Navigation />
 
      <hr />
 
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
      <Route path={ROUTES.LESSON_SAMPLE} component={SampleLessonPage} />
      <Route path={ROUTES.STUDENT_TESTS} component={StudentTestsPage} />
    </div>
  </Router>
);
 
export default withAuthentication(App);
