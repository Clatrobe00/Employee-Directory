import React, { Component } from 'react';
import API from './utils/API';
import EmployeeTable from './EmployeeTable';
import DirectoryContext from './utils/DirectoryContext';

class SearchHandler extends Component {
    state = {
        employees: [],
    }

    componentDidMount () {
        API().then(res => {
            const employees = res.data.results;
            this.setState({ employees })
        })
    }

    render() {
        return (
        <DirectoryContext.Provider value={this.state.employees}>
          <EmployeeTable />
        </DirectoryContext.Provider>


          // <ul>
          //     Hello
          //   { this.state.employees.map(employee => <li>Name: {employee.name.first} Age: {employee.dob.age}</li>)}
          // </ul>
        )
      }
}

export default SearchHandler;