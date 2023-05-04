import React, { useState, useEffect } from "react";

export const EliminarEmpresaCopy = () => {
  const [csvData, setCsvData] = useState([]);

  useEffect(() => {
    fetch("https://8080-jphafelin-bots-7y4hl7p49vs.ws-eu96b.gitpod.io/tx_emp.csv")
      .then(response => response.text())
      .then(csvText => {
        const csvRows = csvText.split("\n");
        const csvDataArray = csvRows.map(row => row.split(";"));
        setCsvData(csvDataArray);

      })
      .catch(error => console.error(error));
  }, []);
  console.log("AQUI", csvData);
  return (
    <div>
     
          {csvData.map((row, index) => (
            <div className="d-flex">
              

              <div key={index} className="col-2 border border-dark"><b>{row[2]}</b></div>
              <div key={index} className="col-8 border border-dark text-start"><b className="mx-2">{row[1]}</b></div>
              <div key={index} className="col-2 border border-dark"><b>{row[5]}</b></div>
            </div>
          ))}
        
    </div>
  );
}