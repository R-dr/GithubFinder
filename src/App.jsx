import React, { Component } from 'react';
import { Navbar } from './Components/layout/Navbar';
import Users from './Components/users/Users';
import Search from './Components/users/Search';

import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.GITHUB_ID}&client_secret=${process.env.GITHUB_API_KEY}`
  //   );

  //   this.setState({ users: res.data, loading: false });
  // }
  // searches github users through props
  searchUsers = async text => {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.GITHUB_ID}&client_secret=${process.env.GITHUB_API_KEY}`
    );
    console.log(res.data)
      console.log(this.state.users)
    this.setState({ users: res.data.items, loading: false });
    console.log(this.state.users)
  
  };
  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Search searchUsers={this.searchUsers} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
