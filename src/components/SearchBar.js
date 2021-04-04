import { useState } from 'react'
import Form from 'react-bootstrap/Form';

const SearchBar = () => {

    const [userSearch, setUserSearch] = useState({
        name: "name"
    });

    const handleChange = (e) => {
        setUserSearch({name: e.target.value});
        console.log('target data is ', e.target.value);
    }

    return (
        <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Search for Employee</Form.Label>
            <Form.Control type="text" value={userSearch.name} onChange={handleChange}/>
            <Form.Text className="text-muted">
            Just type in the first name of the employee you need.
            </Form.Text>
        </Form.Group>
    
        </Form>
    )

}

export default SearchBar;