import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/Logo.jpg";
import Papa from 'papaparse';

import "../../styles/home.css";

export const Filtro = () => {
	const { store, actions } = useContext(Context);

	fetch('/workspace/bots/src/api/MONITBOTS.csv')
  .then(response => response.text())
  .then(data => {
    const parsedData = Papa.parse(data, { header: true });
    const jsonData = JSON.stringify(parsedData.data);
    console.log("ESTA ES LA ESPUESTA", jsonData);
  })
  .catch(error => console.error(error));
	return (
		<div className="text-center mt-5">
			<img src="Logo.jpg"></img>
			<table class="table">
  <thead>
    <tr>
      <th className="col">ID-BOT</th>
      <th className="col">ESTADO -1</th>
      <th className="col">ULTIMO REPORTE - 1</th>
      <th className="col">ULTIMO REPORTE - 1</th>
	  <th className="col">ESTADO PROGRAMA</th>
      <th className="col">INICIO</th>
      <th className="col">TERMINO</th>
      <th className="col">ESTADO - 0</th>
	  <th className="col">ULTIMO REPORTE - 0</th>
      <th className="col">PROXIMO REPORTE -0</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
	  <td><input></input></td>
      <td><input></input></td>
      <td><input></input></td>
      <td><input></input></td>
	  <td><input></input></td>
      <td><input></input></td>
      <td><input></input></td>
	  <td><input></input></td>
      <td><input></input></td>
      <td><input></input></td>
	  
      
    </tr>
    <tr>
	<th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
	  <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
	  <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
	 
    </tr>
    <tr>
	<th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
	  <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
	  <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
	
    </tr>
  </tbody>
</table>
		</div>
	);
};
