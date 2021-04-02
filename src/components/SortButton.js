import { useContext } from 'react';
import DirectoryContext from './utils/DirectoryContext';
import Button from 'react-bootstrap/Button';



const SortButton = (props) => {

    const employeeData = useContext(DirectoryContext)
    console.log(employeeData)

    return (
        <Button onClick={() => console.log('hello')}>
            Hello
        </Button>
    )    
}





export default SortButton;