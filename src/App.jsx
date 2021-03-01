//Api libraries
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import { Navbar } from './Components/layout/Navbar';
import User from './Components/users/User';
import { Alert } from './Components/layout/Alert';
import { About } from './Components/pages/About';
import { Home } from './Components/pages/Home';
import { NotFound } from './Components/pages/NotFound';

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
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
