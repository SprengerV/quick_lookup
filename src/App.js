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
        const emps = res.data.results;
        this.setState({
          employees: emps,
          results: emps})
      })
      .catch(err => console.log(err));
  }
  inputHandler = event => {
    const results = this.state.employees.filter(({ name, email, location }) => {
      const query = event.target.value.trim().split(',').join('').toLowerCase();
      // having last, first, then last makes it so the search will pick it up regardless of what order the user types the names in
      const fields = [name.last, name.first, name.last, email, location.city, location.state, location.country]; 
      const searchable = fields.join(' ').toLowerCase();
      return searchable.includes(query);
    });
    this.setState({ 
      search: event.target.value,
      results: results
    });
  }
  clearInput = event => {
    this.setState({ search: "" });
  }

  render() {
    return (
      <div id="app">
        <Navbar />
        <Search
          inputHandler={this.inputHandler}
          search={this.state.search}
          clearInput={this.clearInput}  
        />
        <EmployeeList 
          employees={this.state.results}
        />
      </div>
    )
  }
}

export default App;
