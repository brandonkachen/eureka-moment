import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withAuthentication } from '../Session';
import aComp from '../Utilities/AsyncComponent';
import { Link } from 'react-router-dom';

import * as ROUTES from './routes';

const PreTestPage = aComp(() => import('./pretest.js'));

const StudentTests = () => (
  <div>
    <Route path={ROUTES.PRE_TEST} component={PreTestPage} />
    <ul>
      <li>
        <Link to={ROUTES.PRE_TEST}>Pre-Test</Link>
      </li>
    </ul>
  </div>
);
  
export default StudentTests;
  