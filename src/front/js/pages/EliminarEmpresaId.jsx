import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/botones.css"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import logo from "../../img/LogoNewOffice.jpeg";
import "../../styles/navbar.css"
import rigoImageUrl from "../../img/Logo.jpg";
import Papa from 'papaparse';
import { relativeTimeRounding } from "moment";



export const EliminarEmpresaId = () => {
  
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const id_empresa = localStorage.getItem("id_empresa")
  
  const myArray = store.evento;
  
 

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

    fetch("https://3001-jphafelin-bots-8ldo44emw7c.ws-eu95.gitpod.io/api/empresa/"+ id_empresa, requestOptions)
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
            <input className="casilla-id col bg-light rounded" maxLength="4" value={myArray.id} disabled="disabled"></input>
            <label className="label-razon-social">RAZON SOCIAL:</label>
            <input className=" casilla-razon-social col-6 text-uppercase rounded bg-light" maxLength="45" value={myArray.razon_social} disabled="disabled"
            ></input>
            <label className="label-rut">RUT:</label>
            <input className="casilla-rut col-2 text-uppercase rounded bg-light" maxLength="12" value={myArray.rut} disabled="disabled"></input>
            -
            <input className="casilla-rut-verificador col-2 text-uppercase rounded bg-light" maxLength="12" value={myArray.rut} disabled="disabled"></input>
            <label className="label-estado">ESTADO:</label>
            <input className="casilla-rut col-2 text-uppercase rounded bg-light" value={myArray.estado} disabled="disabled">


            </input>
          </div>

        </div>
        <div className="row my-2">
          <div className="text-start mx-3">

            <label>NOMBRE FANTASIA:</label>
            <input className="casilla-nombre-fantasia col-6 text-uppercase rounded bg-light" maxLength="40" value={myArray.nombre_fantasia} disabled="disabled"
            ></input>
            <label className="label-giro">GIRO:</label>
            <input className="casilla-giro col-4 text-uppercase rounded bg-light" maxLength="40" value={myArray.giro} disabled="disabled"
            ></input>
          </div>

        </div>

        <div className="border-top border-bottom border-dark border-3 justify-content-center banda">
          <b>DIRECCION FACTURACION</b>
        </div>
        <div className="row my-1">
          <div className="text-start py-1 mx-3">
            <label>DIRECCION:</label>
            <input className="casilla-direccion col-4 text-uppercase rounded bg-light" maxLength="40" value={myArray.direccion_facturacion} disabled="disabled"
            ></input>
            <label className="label-region">REGION:</label>
            <input className="casilla-id col bg-light rounded" maxLength="4" value={myArray.region} disabled="disabled"></input>
            <label className="label-comuna">COMUNA:</label>
            <input className="casilla-comuna col-4 text-uppercase rounded bg-light" maxLength="20" value={myArray.comuna} disabled="disabled"
            ></input>
          </div>
        </div>


        <div className="border-top border-bottom border-dark border-3 justify-content-center banda">
          <b>CONTACTO FACTURACION</b>
        </div>
        <div className="row my-2">
          <div className="text-start mx-3">
            <label>NOMBRE:</label>
            <input className="casilla-nombre col-4 text-uppercase rounded bg-light" maxLength="35" value={myArray.nombre_contacto_facturacion} disabled="disabled"
            ></input>
            <label className="label-telefono">TELEFONO:</label>
            <input className="casilla-telefono col-4 text-uppercase rounded bg-light" maxLength="25" value={myArray.telefono_contacto_facturacion} disabled="disabled"
            ></input>
          </div>

        </div>
        <div className="row my-2">
          <div className="text-start mx-3">
            <label>EMAIL:</label>
            <input className="casilla-email col-4 text-uppercase rounded bg-light" maxLength="42" value={myArray.email_contacto_facturacion} disabled="disabled"
            ></input>
            <label className="label-cargo">CARGO:</label>
            <input className="casilla-cargo col-4 text-uppercase rounded bg-light" maxLength="23" value={myArray.cargo_contacto_facturacion} disabled="disabled"
            ></input>
          </div>

        </div>
        <div className="border-top border-bottom border-dark border-3 justify-content-center banda">
          <b>CONTACTO COBRANZA</b>
        </div>
        <div className="row my-2">
          <div className="text-start mx-3">
            <label>NOMBRE:</label>
            <input className="casilla-nombre col-4 text-uppercase rounded bg-light" maxLength="35" value={myArray.nombre_contacto_cobranza} disabled="disabled"
            ></input>
            <label className="label-telefono">TELEFONO:</label>
            <input className="casilla-telefono col-4 text-uppercase rounded bg-light" maxLength="25" value={myArray.telefono_contacto_cobranza} disabled="disabled"
            ></input>
          </div>

        </div>
        <div className="row my-2">
          <div className="text-start mx-3">
            <label>EMAIL:</label>
            <input className="casilla-email col-4 text-uppercase rounded bg-light" maxLength="42" value={myArray.email_contacto_cobranza} disabled="disabled"
            ></input>
            <label className="label-cargo">CARGO:</label>
            <input className="casilla-cargo col-4 text-uppercase rounded bg-light" maxLength="23" value={myArray.cargo_contacto_cobranza} disabled="disabled"
            ></input>
          </div>

        </div>
        <div className="border-top border-bottom border-dark border-3 justify-content-center banda">
          <b>DATOS REGISTRO</b>
        </div>
        <div className="row my-2">
          <div className="text-start mx-3">
            <label>USUARIO CREADOR:</label>
            <input className="casilla-nombre col-4 text-uppercase rounded bg-light" maxLength="35" value={myArray.id_usuario_master_creador} disabled="disabled"
            ></input>
            <label className="label-telefono">FECHA CREACION:</label>
            <input className="casilla-telefono col-4 text-uppercase rounded bg-light" maxLength="25" value={myArray.fecha_y_hora_creacion} disabled="disabled"
            ></input>
          </div>

        </div>
        <div className="row my-2">
          <div className="text-start mx-3">
            <label>USUARIO ULTIMA MODIF.:</label>
            <input className="casilla-email col-4 text-uppercase rounded bg-light" maxLength="42" value={myArray.id_usuario_master_modificador} disabled="disabled"
            ></input>
            <label className="label-cargo">FECHA ULT. MODIF.:</label>
            <input className="casilla-cargo col-4 text-uppercase rounded bg-light" maxLength="23" value={myArray.fecha_y_hora_modificacion} disabled="disabled"
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
