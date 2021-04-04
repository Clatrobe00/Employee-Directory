import React, { useContext, useEffect } from 'react';
import { Table } from 'react-bootstrap'
import DirectoryContext from './utils/DirectoryContext';
import SortContext from './utils/SortContext'
import FilterContext from './utils/FilterContext';

const EmployeeTable = () => {

    const searchFilter = useContext(FilterContext);
    const employeeData = useContext(DirectoryContext);
    const sortMethod = useContext(SortContext);
    console.log('sort method is', sortMethod);
    let sortedEm;

    const filterEmployees = () => {
        employeeData.filter(employee => {
            return employee.name.first.toLowerCase().includes(searchFilter.toLowerCase());
        })
    }

    useEffect(() => {
        const filter = filterEmployees()
        console.log('filtered array is ', filter)
    })

    const mapEmployees = () => {
        switch (sortMethod) {
            case 'age':
                sortedEm= employeeData.sort((a,b) => {
                    return a.dob.age - b.dob.age
                })
                break;
            case 'registered':
                sortedEm= employeeData.sort((a,b) => {
                    return a.registered.age - b.registered.age
                })
                break
            default:
                break;
        }
        
        const emTab = employeeData.map(employee => {
            return (
                <tr key={employeeData.indexOf(employee)}>
                <td>{employee.name.title}</td>
                <td>{employee.name.first}</td>
                <td>{employee.name.last}</td>
                <td>{employee.cell}</td>
                <td>{employee.email}</td>
                <td>{employee.dob.age}</td>
                <td>{employee.registered.date}</td>
                </tr>
            )

        })
        return emTab;
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Title</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Cell</th>
                <th>Email</th>
                <th>Age</th>
                <th>Registered</th>
                </tr>
            </thead>
            <tbody>
                {(employeeData[0]) ? (mapEmployees(employeeData)) : (                    
                    <tr>
                    <td>No Data</td>
                    <td>No Data</td>
                    <td>No Data</td>
                    <td>No Data</td>
                    <td>No Data</td>
                    <td>No Data</td>
                    </tr>
                )}          
            </tbody>
        </Table>
    )
}    

export default EmployeeTable;