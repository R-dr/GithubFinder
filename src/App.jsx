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
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.GITHUB_ID}&client_secret=${process.env.GITHUB_API_KEY}`
    );
    console.log(res.data);
    console.log(this.state.users);
    this.setState({ users: res.data.items, loading: false });
    console.log(this.state.users);
  };
  //clear users from state
  clearUsers = ()=>{
    this.setState({users:[], loading:false})
  }
  render() {
    const {users,loading} = this.state
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={ users.length>0 ? true: false}/>
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
