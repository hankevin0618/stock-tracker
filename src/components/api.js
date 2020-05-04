import React, { useState, useEffect } from "react";
import { Button, Badge, Input } from "reactstrap";

// AG Grid
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

const API_URL = "http://131.181.190.87:3000";
const url = `${API_URL}/stocks/symbols`;

function SearchBar(props) {
  const [innerSearch, setInnerSearch] = useState("");
  return (
    <div className="d-flex align-items-center">
      <Input
        type="search"
        name="search"
        id="search"
        aria-labelledby="search-button"
        value={innerSearch}
        onChange={(e) => {
          setInnerSearch(e.target.value);
        }}
      />

      <Button id="search-button" type="button">
        Search
      </Button>
    </div>
  );
}

export default function useStocks() {
  const [rowData, setRowData] = useState([]);

  const columns = [
    { headerName: "Name", field: "name", sortable: true, filter: true },
    { headerName: "Industry", field: "industry", sortable: true },
    { headerName: "Symbol", field: "symbol", sortable: true },
  ];

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        data.map((info) => {
          return {
            name: info.name,
            industry: info.industry,
            symbol: info.symbol,
          };
        })
      )
      .then((info) => setRowData(info));
  });

  return (
    <div className="containcer">
      <div
        className="widgets"
        style={{ display: "inline-flex", margin: "10px" }}
      >
        <p className="mr-3">
          <Badge color="success">{rowData.length}</Badge> Stocks are found
        </p>
        <SearchBar />
      </div>
      <div
        className="ag-theme-balham"
        style={{
          height: "600px",
          width: "800px",
          margin: "auto",
        }}
      >
        <AgGridReact
          columnDefs={columns}
          rowData={rowData}
          pagination={true}
          paginationPageSize={15}
        />
      </div>
    </div>
  );
}
