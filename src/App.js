import React, { Component } from 'react'
import './App.css';
import Navbar from './components/navbar';
import Search from './components/search';
// import EmployeeList from './components/employeeList'

class App extends Component {
  state = {
    search: "",
    results: []
  }

  inputHandler = event => {
    this.setState({ search: event.target.value });
  }
  clearInput = event => {
    this.setState({ search: "" });
  }
  filterResults = search => {

  }

  render() {
    return (
      <div>
        <Navbar />
        <Search
          inputHandler={this.inputHandler}
          search={this.state.search}
          clearInput={this.clearInput}  
        />
        {/* <EmployeeList /> */}
      </div>
    )
  }
}

export default App;
