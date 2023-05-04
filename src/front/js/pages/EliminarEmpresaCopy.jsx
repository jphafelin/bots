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
      
      <table>
        <tbody>
          {csvData.map((row, index) => (
            <tr key={index}>
              {row.map((cell, index) => (
                <td key={index}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}