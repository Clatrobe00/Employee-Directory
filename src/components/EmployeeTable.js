import React, { useContext } from 'react';
import { Table } from 'react-bootstrap'
import DirectoryContext from './utils/DirectoryContext';

const EmployeeTable = () => {
    const employeeData = useContext(DirectoryContext)
        console.log(employeeData);
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th></th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
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