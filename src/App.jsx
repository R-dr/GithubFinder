//Api libraries
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import { Navbar } from './Components/layout/Navbar';
import Users from './Components/users/Users';
import User from './Components/users/User';
import Search from './Components/users/Search';
import { Alert } from './Components/layout/Alert';
import { About } from './Components/pages/About';

// Context helpers
import GithubState from './Context/Github/GithubState';
import AlertState from './Context/Alert/AlertState';

import './App.css';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route
                  exact
                  path='/'
                  render={props => (
                    <Fragment>
                      <Search />
                      <Users />
                    </Fragment>
                  )}
                />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
