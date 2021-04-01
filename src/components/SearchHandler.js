import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import API from './utils/API';
import EmployeeTable from './EmployeeTable';
import DirectoryContext from './utils/DirectoryContext';
import SortButton from './SortButton';

class SearchHandler extends Component {
    state = {
        employees: [],
    }

    componentDidMount () {
      this.getEmployees()
    }

    getEmployees () {
      API().then(res => {
        const employees = res.data.results;
        this.setState({ employees })
      })
      .catch(err => console.log(err));
    }

    // componentDidUpdate () {
    //   this.getEmployees()
    // }

    render() {
        return (
          <Container>
            <DirectoryContext.Provider value={this.state.employees}>
              <EmployeeTable />
            </DirectoryContext.Provider>
            <SortButton>
              Sort
            </SortButton>
          </Container>

          // <ul>
          //     Hello
          //   { this.state.employees.map(employee => <li>Name: {employee.name.first} Age: {employee.dob.age}</li>)}
          // </ul>
        )
      }
}

export default SearchHandler;