import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/botones.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../img/LogoNewOffice.jpeg";
import "../../styles/navbar.css";
import Papa from "papaparse";

export const EliminarEmpresaCopy = () => {
  
  const [data, setData] = useState([]);
  const [columnArray, setColumn] = useState([]);
  const [values, setValues] = useState([]);

  const handleFile = (event) => {
    
    Papa.parse(event.target.files[0], {
      
      header: true,
      skipEmptyLines: true,
      delimiter: ";",
      complete: function(result) {
        const filteredData = result.data.map((d) => {
          return {
            C03_tx_emp: d.C03_tx_emp,
            C02_tx_emp: d.C02_tx_emp,
            C06_tx_emp: d.C06_tx_emp
          };
        });
        const columnArray = Object.keys(filteredData[0]);
        const valuesArray = filteredData.map((d) => Object.values(d));
        setData(filteredData);
        setColumn(columnArray);
        setValues(valuesArray);
        
      }
    });
  };

  return (
    <div className="containter justify-content-center">
      <nav className="navbar p-1">
        <div className="container-fluid row">
          <div className="col-2">
            <Link to="/menu">
              <img src={logo} height="60px"></img>
            </Link>
          </div>
          <div className="col-8 text-center justify-content-start ">
            <h3>ELIMINAR EMPRESA</h3>
          </div>
          <div className="col-2 text-end">
            <p>X04-E1</p>
            <div>
              <button id="cerrar-sesion" className="text-light btn border border-3 border-dark">CERRAR SESION</button>
              <button id="ayuda" className="mx-2 btn border border-3 border-dark">?</button>
            </div>
          </div>
        </div>
      </nav>

      <div>
        <input 
          type="file"
          name="file"
          accept=".csv"
          style={{display:"block", margin:"10px auto"}}
          onChange={handleFile}>
        </input>
        
        <table style={{borderCollapse:"collapse", border:"1px solid black", margin:"5px auto"}}>
          <thead>
            <tr>
              {columnArray.map((col, i)=> (
                <th key={i}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {values.map((v, i)=> (
              <tr key={i}>
                {v.map((value, i)=> (
                  <td key={i}>{value}</td>
                ))}
              </tr>
            ))}      
          </tbody>
        </table>
      </div>
    </div>
  );
};