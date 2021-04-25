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
    console.log(this.state.search)
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
        />
        {/* <EmployeeList /> */}
      </div>
    )
  }
}

export default App;
