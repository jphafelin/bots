import React, { useState, useEffect } from 'react';

export const EliminarEmpresaCopy = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchCsv() {
      const response = await fetch('https://8080-jphafelin-bots-0qv6r8hpr95.ws-eu96b.gitpod.io/tx_emp.csv');
      const text = await response.text();
      const rows = text.split('\n');
      const headers = rows[0].split(';');
      const result = [];
      for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].split(';');
        if (cells.length !== headers.length) continue;
        const row = {};
        for (let j = 0; j < cells.length; j++) {
          row[headers[j]] = cells[j];
        }
        result.push(row);
      }
      setData(result);
      console.log("RESULT", result[0].C02_tx_emp
      );
    }
    fetchCsv();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Columna 1</th>
            <th>Columna 2</th>
            <th>Columna 3</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td>{row['Columna 1']}</td>
              <td>{row['Columna 2']}</td>
              <td>{row['Columna 3']}</td>
            </tr>
            
          ))}
        </tbody>
      </table>
    </div>
  );
}