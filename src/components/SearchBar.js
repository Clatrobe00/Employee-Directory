import Form from 'react-bootstrap/Form';


const SearchBar = () => {
    <Form>
    <Form.Group controlId="formBasicEmail">
        <Form.Label>Search for Employee</Form.Label>
        <Form.Control type="searchBar" placeholder="Enter name" />
        <Form.Text className="text-muted">
        Just type in the first name of the employee you need.
        </Form.Text>
    </Form.Group>

    </Form>
}

export default SearchBar;