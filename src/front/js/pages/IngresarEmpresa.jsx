import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/botones.css"
import { useNavigate } from "react-router-dom"
import rigoImageUrl from "../../img/Logo.jpg";
import Papa from 'papaparse';



export const IngresarEmpresa = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();


  return (
    <div className="containter row justify-content-center dv-100">

      <div id="ingresar" className="row justify-content-center text-light border border-dark border-2 border-top-0">I N G R E S A R</div>
      <div>

        <button id="btn-volver" className="col-1 m-4 justify border border-3 border-dark text-light" onClick={volver => navigate("/empresa")}>VOLVER</button>

      </div>

      <div className="col-9 text-center py-1 border border-3 border-dark bg-light">
        <div className="row">
          <div className="text-start">
            <label>ID:</label>
            <input className="col-1 mx-2 bg-light" value="1234" disabled="disabled"></input>
            <label>RAZON SOCIAL:</label>
            <input className="col-6 mx-2"></input>
          </div>

        </div>
        <div className="row my-2">
          <div className="text-start">
            <label>RUT:</label>
            <input className="col-2 mx-2" value="99.999.999-A"></input>
            <label>NOMBRE FANTASIA:</label>
            <input className="col-6 mx-2" ></input>
          </div>

        </div>
        <div className="row my-2">
          <div className="text-start">
            <label>GIRO:</label>
            <input className="col-4 mx-2"></input>
            <label>ESTADO:</label>
            <select className="col bg-primary text-light">
              <option>NO VIGENTE</option>
              <option>VIGENTE</option>
            </select>
          </div>

        </div>
        <div className="row p-1 border-top border-bottom border-dark border-3 justify-content-center banda">
          <b>DIRECCION FACTURACION</b>
        </div>
        <div className="row y-2">
          <div className="text-start  py-1">
            <label>DIRECCION:</label>
            <input className="col-4 mx-2"></input>
            <label>REGION:</label>
            <select className="col bg-primary text-light">
              <option>01</option>
              <option>02</option>
              <option>03</option>
              <option>04</option>
              <option>05</option>
              <option>06</option>
              <option>07</option>
              <option>08</option>
              <option>09</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>RM</option>
              <option>14</option>
              <option>15</option>

            </select>
          </div>
        </div>
        <div className="row y-2">
          <div className="text-start  py-1">
            <label>COMUNA:</label>
            <input className="col-4 mx-2"></input>

          </div>
        </div>

        <div className="row p-1 border-top border-bottom border-dark border-3 justify-content-center banda">
          <b>CONTACTO FACTURACION</b>
        </div>
        <div className="row my-2">
          <div className="text-start">
            <label>NOMBRE:</label>
            <input className="col-4 mx-2"></input>
            <label>TELEFONO:</label>
            <input className="col-4 mx-2"></input>
          </div>

        </div>
        <div className="row my-2">
          <div className="text-start">
            <label>EMAIL:</label>
            <input className="col-4 mx-2"></input>
            <label>CARGO:</label>
            <input className="col-4 mx-2"></input>
          </div>

        </div>
        <div className="row p-1 border-top border-bottom border-dark border-3 justify-content-center banda">
          <b>CONTACTO COBRANZA</b>
        </div>
        <div className="row my-2">
          <div className="text-start">
            <label>NOMBRE:</label>
            <input className="col-4 mx-2"></input>
            <label>TELEFONO:</label>
            <input className="col-4 mx-2"></input>
          </div>

        </div>
        <div className="row my-2">
          <div className="text-start">
            <label>EMAIL:</label>
            <input className="col-4 mx-2"></input>
            <label>CARGO:</label>
            <input className="col-4 mx-2"></input>
          </div>

        </div>
        <div className="row p-1 border-top border-bottom border-dark border-3 justify-content-center banda">
          <b>DATOS REGISTRO</b>
        </div>
        <div className="row my-2">
          <div className="text-start">
            <label>USUARIO CREADOR:</label>
            <input className="col mx-2 bg-light" disabled="disabled"></input>
            <label>FECHA CREACION:</label>
            <input className="col mx-2 bg-light" value="DD-MM-AAAA HH:MM" disabled="disabled"></input>

          </div>

        </div>
        <div className="row my-2">
          <div className="text-start">
            <label>USUARIO ULTIMA MODIF.:</label>
            <input className="col mx-2 bg-light" disabled="disabled"></input>
            <label>FECHA ULT. MODIF.:</label>
            <input className="col mx-2 bg-light" value="DD-MM-AAAA HH:MM" disabled="disabled"></input>

          </div>

        </div>

      </div>


      <div className="row justify-content-center m-3">

      </div>
      <div className="col-8">
      <div className="text-end">

        <button id="btn-grabar" className="col-1 justify border border-3 border-dark" onClick={grabar => alert("Grabado")}><b>GRABAR</b></button>

      </div>
      </div>



    </div>
  );
};
