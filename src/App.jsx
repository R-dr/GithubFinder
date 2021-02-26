import React, { Component } from "react";
import {Navbar} from "./Components/layout/Navbar";
import Users from './Components/users/Users'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className="container">
          <Users/>
        </div>
      </div>
    );
  }
}

export default App;
