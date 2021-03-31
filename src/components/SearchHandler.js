import React, { Component } from 'react';
import API from './utils/API';

class SearchHandler extends Component {
    state = {
        employees: [],
    }

    componentDidMount () {
        API().then(res => {
            const employees = res.data.results;
            this.setState({ employees })
            console.log(this.state.employees)
        })
    }

    render() {
        return (
          <ul>
              Hello
            { this.state.employees.map(employee => <li>Name: {employee.name.first} Age: {employee.dob.age}</li>)}
          </ul>
        )
      }
}

export default SearchHandler;