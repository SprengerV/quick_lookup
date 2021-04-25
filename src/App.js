import React, { Component } from 'react'
import './App.css';
import Navbar from './components/navbar';
import Search from './components/search';
import EmployeeList from './components/employeeList'
import getEmployees from './utils/API'

class App extends Component {
  state = {
    search: "",
    results: [],
    employees: []
  }

  componentDidMount() {
    getEmployees()
      .then(res => {
        this.setState({ employees: res.data.results })
      })
      .catch(err => console.log(err));
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
        <EmployeeList employees={this.state.employees}/>
      </div>
    )
  }
}

export default App;
