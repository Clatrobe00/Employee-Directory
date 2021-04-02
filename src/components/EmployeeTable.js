import React, { useContext } from 'react';
import { Table } from 'react-bootstrap'
import DirectoryContext from './utils/DirectoryContext';
import SortContext from './utils/SortContext'

const EmployeeTable = () => {

    const employeeData = useContext(DirectoryContext)
    const sortMethod = useContext(SortContext)
    console.log('sort method is', sortMethod)
    let sortedEm;
    const mapEmployees = () => {
        switch (sortMethod) {
            case 'age':
                sortedEm= employeeData.sort((a,b) => {
                    return a.dob.age - b.dob.age
                })
                console.log('age sorted Emps are', sortedEm)
                break;
            case 'cell':
                sortedEm= employeeData.sort((a,b) => {
                    return a.cell - b.cell
                })
                console.log('cell sorted Emps are', sortedEm)    
                break
            default:
                console.log('broken')
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


    /* // <tr>
    //   <td>1</td>
    //   <td>Mark</td>
    //   <td>Otto</td>
    //   <td>@mdo</td>
    // </tr>
  </tbody> */

export default EmployeeTable;