import React, { useState, Fragment } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar } from './Components/layout/Navbar';
import Users from './Components/users/Users';
import User from './Components/users/User';
import Search from './Components/users/Search';
import { Alert } from './Components/layout/Alert';
import { About } from './Components/pages/About';

import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  
  const searchUsers = async text => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.GITHUB_ID}&client_secret=${process.env.GITHUB_API_KEY}`
    );
    setUsers(res.data.items);
    setLoading(false);
  };

  // Get single user
  const getUser = async username => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.GITHUB_ID}&client_secret=${process.env.GITHUB_API_KEY}`
    );
    setUser(res.data);
    setLoading(false);
  };

  // Get user repos
  const getUserRepos = async username => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.GITHUB_ID}&client_secret=${process.env.GITHUB_API_KEY}`
    );
    setRepos(res.data);
    setLoading(false);
  };

  //clear users from state
  const clearUsers = () => {
    setUsers([])
    setLoading(false)
  };

  //Alert functionality
  const showAlert = (msg, type) => {
    setAlert({ msg, type })
    
    // alert disappears after 5 seconds with this
    setTimeout(() => setAlert(null) , 5000);
  };

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Alert alert={alert} />
          <Switch>
            <Route
              exact
              path='/'
              render={props => (
                <Fragment>
                  <Search
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={showAlert}
                  />
                  <Users loading={loading} users={users} />
                </Fragment>
              )}
            />
            <Route exact path='/about' component={About} />
            <Route
              exact
              path='/user/:login'
              render={props => (
                <User
                  {...props}
                  getUser={getUser}
                  getUserRepos={getUserRepos}
                  repos={repos}
                  user={user}
                  loading={loading}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
