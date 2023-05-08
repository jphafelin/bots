import React, { useState, useEffect } from "react";

import "../../styles/botones.css"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import logo from "../../img/LogoNewOffice.jpeg";
import "../../styles/navbar.css"
import rigoImageUrl from "../../img/Logo.jpg";
import Papa from 'papaparse';
import { relativeTimeRounding } from "moment";



export const EliminarEmpresaId = () => {
  const navigate = useNavigate();
  const id_empresa = localStorage.getItem("id_empresa")
  const [csvData, setCsvData] = useState([]);
  const lista = []

  useEffect(() => {
    fetch("https://8080-jphafelin-bots-9ha6n20g8vs.ws-eu96b.gitpod.io/tx_emp.csv")
      .then(response => response.text())
      .then(csvText => {
        const csvRows = csvText.split("\n");
        const csvDataArray = csvRows.map(row => row.split(";"));
        setCsvData(csvDataArray);

      })
      .catch(error => console.error(error));
  }, []);
  
  for (let i = 0; i < csvData.length; i++) {
    for (let j = 0; j < csvData.length; j++) {
      // Aquí se puede trabajar con csvData[i][j]
      lista.push(csvData[localStorage.getItem("id_empresa")][[j]]);
      //console.log(csvData[localStorage.getItem("id_empresa")][j]);


  
      
    }
  }
 
  console.log("ESTADO",lista[5]);
  
  

  
  


  
 

  const grabar = () => {
    var moment = require('moment');
 
	// obtener el nombre del mes, día del mes, año, hora
	  var now = moment().format("DD/MM/YYYY HH:mm");

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "estado": "NO VIGENTE",
      "fecha_y_hora_modificacion": now
    });

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(host +"/api/empresa/"+ id_empresa, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    alert("Empresa " + id_empresa + " Eliminada")
    navigate("/empresa")
    
    location.reload();

  }



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
            <h3>ELIMINAR EMPRESA ACTUAL</h3>
          </div>
          <div className="col-2 text-end">
            <p>X04-E2</p>
            <div>
              <button id="cerrar-sesion" className="text-light btn border border-3 border-dark">CERRAR SESION</button>
              <button id="ayuda" className="mx-2 btn border border-3 border-dark">?</button>
            </div>
          </div>
        </div>


      </nav>

      <div id="eliminar-titulo" className="justify-content-center text-light text-center border border-dark border-2 border-top-0">E L I M I N A R</div>
      <div>

        <button id="btn-volver" className="btn col-1 m-1 justify border border-3 border-dark text-light" onClick={volver => navigate("/eliminar_empresa")}>VOLVER</button>

      </div>

      <div id="formulario" className="col-8 text-center py-1 border border-3 border-dark bg-light">
        <div className="row">
          <div className="text-start mx-3">
            <label className="label-id">ID:</label>
            <input className="casilla-id col bg-light rounded" maxLength="4" value={lista[0]} disabled="disabled"></input>
            <label className="label-razon-social">RAZON SOCIAL:</label>
            <input className=" casilla-razon-social col-6 text-uppercase rounded bg-light" maxLength="45" value={lista[1]} disabled="disabled"
            ></input>
            <label className="label-rut">RUT:</label>
            <input className="casilla-rut col-2 text-uppercase rounded bg-light" maxLength="12" value={lista[2]} disabled="disabled"></input>
            -
            <input className="casilla-rut-verificador col-2 text-uppercase rounded bg-light" maxLength="12" value={lista[3]} disabled="disabled"></input>
            <label className="label-estado">ESTADO:</label>
            <input className="casilla-rut col-2 text-uppercase rounded bg-light" value={lista[6]} disabled="disabled">


            </input>
          </div>

        </div>
        <div className="row my-2">
          <div className="text-start mx-3">

            <label>NOMBRE FANTASIA:</label>
            <input className="casilla-nombre-fantasia col-6 text-uppercase rounded bg-light" maxLength="40" value={lista[4]} disabled="disabled"
            ></input>
            <label className="label-giro">GIRO:</label>
            <input className="casilla-giro col-4 text-uppercase rounded bg-light" maxLength="40" value={lista[5]} disabled="disabled"
            ></input>
          </div>

        </div>

        <div className="border-top border-bottom border-dark border-3 justify-content-center banda">
          <b>DIRECCION FACTURACION</b>
        </div>
        <div className="row my-1">
          <div className="text-start py-1 mx-3">
            <label>DIRECCION:</label>
            <input className="casilla-direccion col-4 text-uppercase rounded bg-light" maxLength="40" value={lista[7]} disabled="disabled"
            ></input>
            <label className="label-region">REGION:</label>
            <input className="casilla-id col bg-light rounded" maxLength="4" value={lista[8]} disabled="disabled"></input>
            <label className="label-comuna">COMUNA:</label>
            <input className="casilla-comuna col-4 text-uppercase rounded bg-light" maxLength="20" value={lista[9]} disabled="disabled"
            ></input>
          </div>
        </div>


        <div className="border-top border-bottom border-dark border-3 justify-content-center banda">
          <b>CONTACTO FACTURACION</b>
        </div>
        <div className="row my-2">
          <div className="text-start mx-3">
            <label>NOMBRE:</label>
            <input className="casilla-nombre col-4 text-uppercase rounded bg-light" maxLength="35" value={lista[10]} disabled="disabled"
            ></input>
            <label className="label-telefono">TELEFONO:</label>
            <input className="casilla-telefono col-4 text-uppercase rounded bg-light" maxLength="25" value={lista[11]} disabled="disabled"
            ></input>
          </div>

        </div>
        <div className="row my-2">
          <div className="text-start mx-3">
            <label>EMAIL:</label>
            <input className="casilla-email col-4 text-uppercase rounded bg-light" maxLength="42" value={lista[12]} disabled="disabled"
            ></input>
            <label className="label-cargo">CARGO:</label>
            <input className="casilla-cargo col-4 text-uppercase rounded bg-light" maxLength="23" value={lista[13]} disabled="disabled"
            ></input>
          </div>

        </div>
        <div className="border-top border-bottom border-dark border-3 justify-content-center banda">
          <b>CONTACTO COBRANZA</b>
        </div>
        <div className="row my-2">
          <div className="text-start mx-3">
            <label>NOMBRE:</label>
            <input className="casilla-nombre col-4 text-uppercase rounded bg-light" maxLength="35" value={lista[14]} disabled="disabled"
            ></input>
            <label className="label-telefono">TELEFONO:</label>
            <input className="casilla-telefono col-4 text-uppercase rounded bg-light" maxLength="25" value={lista[15]} disabled="disabled"
            ></input>
          </div>

        </div>
        <div className="row my-2">
          <div className="text-start mx-3">
            <label>EMAIL:</label>
            <input className="casilla-email col-4 text-uppercase rounded bg-light" maxLength="42" value={lista[16]} disabled="disabled"
            ></input>
            <label className="label-cargo">CARGO:</label>
            <input className="casilla-cargo col-4 text-uppercase rounded bg-light" maxLength="23" value={lista[17]} disabled="disabled"
            ></input>
          </div>

        </div>
        <div className="border-top border-bottom border-dark border-3 justify-content-center banda">
          <b>DATOS REGISTRO</b>
        </div>
        <div className="row my-2">
          <div className="text-start mx-3">
            <label>USUARIO CREADOR:</label>
            <input className="casilla-nombre col-4 text-uppercase rounded bg-light" maxLength="35" value={lista[18]} disabled="disabled"
            ></input>
            <label className="label-telefono">FECHA CREACION:</label>
            <input className="casilla-telefono col-4 text-uppercase rounded bg-light" maxLength="25" value={lista[19]} disabled="disabled"
            ></input>
          </div>

        </div>
        <div className="row my-2">
          <div className="text-start mx-3">
            <label>USUARIO ULTIMA MODIF.:</label>
            <input className="casilla-email col-4 text-uppercase rounded bg-light" maxLength="42" value={lista[20]} disabled="disabled"
            ></input>
            <label className="label-cargo">FECHA ULT. MODIF.:</label>
            <input className="casilla-cargo col-4 text-uppercase rounded bg-light" maxLength="23" value={lista[21]} disabled="disabled"
            ></input>
          </div>

        </div>

        




      </div>


      <div className="row justify-content-center m-1">

      </div>
      <div className="col-10">
        <div className="text-end">

          <button id="btn-grabar" className="col-1 justify border border-3 border-dark btn" onClick={grabar}><b>ELIMINAR</b></button>

        </div>
      </div>



    </div>
  );
};
