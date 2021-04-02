import React, { Component, useState } from 'react';
import Container from 'react-bootstrap/Container';
import API from './utils/API';
import EmployeeTable from './EmployeeTable';
import DirectoryContext from './utils/DirectoryContext';
// import SortButton from './SortButton';
import SortContext from './utils/SortContext';

class SearchHandler extends Component {
  constructor(props) {
    super()
    this.state = {
      employees: [],
      sortBy: 'cell'
    }
  }


    componentDidMount () {
      this.getEmployees()
    }

    getEmployees () {
      API().then(res => {
        const results = res.data.results;
        this.setState({ employees: results })
      })
      .catch(err => console.log(err));
    }

    orderHandler (e) {
      this.setState({ sortBy: e.target.value })
    }

    // componentDidUpdate () {
    //   this.getEmployees()
    // }

    render() {
        return (
          <Container>
            <DirectoryContext.Provider value={this.state.employees}>
              <SortContext.Provider value={this.state.sortBy}>
                <h1>{this.state.sortBy}</h1>
                <EmployeeTable />
              </SortContext.Provider>
            </DirectoryContext.Provider>
            <button value='age' onClick={(e) => this.orderHandler(e)}>Age</button>
            <button value='registered' onClick={(e) => this.orderHandler(e)}>Registered</button>
          </Container>

          // <ul>
          //     Hello
          //   { this.state.employees.map(employee => <li>Name: {employee.name.first} Age: {employee.dob.age}</li>)}
          // </ul>
        )
      }
}

export default SearchHandler;