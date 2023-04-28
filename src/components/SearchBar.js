import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function SearchBar(props) {

    function handleChange(event){
        props.onChange(event.target.value);
    }

    return  <InputGroup className="mb-3">
        <Form.Control
            placeholder="Search for countries..." 
            aria-label="Search..."
            aria-describedby="basic-addon2"
            onChange={handleChange}
        />
  </InputGroup>
}

export default SearchBar;