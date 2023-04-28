import Form from 'react-bootstrap/Form';

function PageSize(props) {

    function handlePageSize(event){
        props.onChange(event.target.value);
        console.log(event.target.value);
    }

    return <Form.Select onChange={handlePageSize}>
        <option>Results per page</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
    </Form.Select>
}

export default PageSize;