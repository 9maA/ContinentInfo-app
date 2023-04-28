import TableBootstrap from 'react-bootstrap/Table';

function Table(props) {
  //console.log(props.apiData);

  const apiResult = props.apiData.results;
  const rowElem = apiResult?.map((row) => //if apiResult exist, then map
    <tr key={row.Country}>
      <td>{row.Country}</td>
      <td>{row.Continent}</td>
      <td>{row.Population}</td>
      <td>{row.PopulationGrowth}</td>
    </tr>
  );

  function handleHeaderclick(event){
    props.onClick(event.target.getAttribute("name"));
  }

  if (!props.apiData.results) {
    // If the API request isn't completed return "loading...""
    return <p>Loading...</p>;
  } else {
    // Write your code here:
    return <TableBootstrap striped bordered hover>
      <thead>
        <tr>
          <th name="Country" onClick={handleHeaderclick} style={{ cursor: "pointer" }}>Country</th>
          <th name="Continent" onClick={handleHeaderclick} style={{ cursor: "pointer" }}>Continent</th>
          <th name="Population" onClick={handleHeaderclick} style={{ cursor: "pointer" }}>Population</th>
          <th name="PopulationGrowth" onClick={handleHeaderclick} style={{ cursor: "pointer" }}>Population Growth</th>
        </tr>
      </thead>
      <tbody>
        {rowElem}
      </tbody>
    </TableBootstrap>; 
  }
}

export default Table;
