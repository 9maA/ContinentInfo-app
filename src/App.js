import React, { useState, useEffect } from "react";
import "./App.css";
import Table from "./components/Table.js";
import SearchBar from "./components/SearchBar";
import PageSize from "./components/PageSize";
import Pagination from "./components/Pagination";
import ContinentSelector from "./components/ContinentSelector";

function App() {
  /* Create state:
        - apiData: List containing dictionaries of countries from API.
        - searchQuery: The query parameter that should be added to &search=
        - pageNumber: The page that is requested
  */

  const [apiData, setApiData] = useState([]);
  const [searchQuery, setSearchQuery] = useState(); // Default = No search query
  const [pageSize, setPageSize] = useState("10"); // Default = PageSize 10
  const [pageNumber, setPageNumber] = useState(1); // Default = Page 1
  const [totalpage, setTotalpage] = useState(1);
  const [header, setSortedHeader] = useState();
  const [continentCheck, setCheckedContinent] = useState([]); //Array that contains all the checked continents


  useEffect(() => {
    // All parameters are appended to this URL.
    //let apiQuery = "https://dhis2-app-course-api.ifi.uio.no/api?";
    let apiQuery = "https://dhis2-app-course.ifi.uio.no/api?";

    // If searchQuery isn't empty add &search=searchQuery to the API request.
    if (searchQuery) {
      apiQuery = apiQuery + "&search=" + searchQuery;
    }

    // Add how many we rows we want to show
    apiQuery = apiQuery + "&pageSize=" + pageSize;

    // Add what page we are requesting to the API request.
    apiQuery = apiQuery + "&page=" + pageNumber;

    // If header isn't empty
    if(header){
      apiQuery = apiQuery + "&order=" + header + ":ASC";
    }

    if(continentCheck.length >= 1){
        apiQuery = apiQuery + "&Continent=" + continentCheck;
    }

    // Query data from API.
    console.log("Querying: " + apiQuery);
    fetch(apiQuery)
      .then((results) => results.json())
      .then((data) => {
        // Then add response to state.
        setApiData(data);
        setTotalpage(data.pager.pageCount)
      })
      .catch(err => {
        alert("Something went wrong. Try again");
      });
  }, [searchQuery, pageSize, pageNumber, header, continentCheck]); // Array containing which state changes that should re-reun useEffect()

  return (
    <div className="App">
      <h1>Country lookup</h1>
      <SearchBar onChange={setSearchQuery}/>
      <ContinentSelector onChange={setCheckedContinent} onClick={setCheckedContinent}/>
      <Table apiData={apiData} onClick={setSortedHeader}/>
      <PageSize onChange={setPageSize}/>
      <Pagination pageNumber={pageNumber} pageCount={totalpage} onClick={setPageNumber}/>
    </div>
  );
}

export default App;
