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
        })
    }

    render() {
        return (
          <ul>
              Hello
            { this.state.employees.map(employee => <li>{employee.name.first}</li>)}
          </ul>
        )
      }
}

export default SearchHandler;