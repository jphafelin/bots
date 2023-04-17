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
    <div className="containter justify-content-center">

      <div id="ingresar-titulo" className="justify-content-center text-light text-center border border-dark border-2 border-top-0">I N G R E S A R</div>
      <div>

        <button id="btn-volver" className="btn col-1 m-1 justify border border-3 border-dark text-light" onClick={volver => navigate("/empresa")}>VOLVER</button>

      </div>

      <div id="formulario" className="col-8 text-center py-1 border border-3 border-dark bg-light">
        <div className="row">
          <div className="text-start mx-3">
            <label>ID:</label>
            <input className="casilla-id col mx-2 bg-light rounded" value="1234" disabled="disabled"></input>
            <label>RAZON SOCIAL:</label>
            <input className=" casilla-razon-social col-6 mx-2 text-uppercase rounded"></input>
          </div>

        </div>
        <div className="row my-2">
          <div className="text-start mx-3">
            <label>RUT:</label>
            <input className="col-2 mx-2 text-uppercase rounded" value="99.999.999-A"></input>
            <label>NOMBRE FANTASIA:</label>
            <input className="col-6 mx-2 text-uppercase rounded" ></input>
          </div>

        </div>
        <div className="row my-2">
          <div className="text-start mx-3">
            <label>GIRO:</label>
            <input className="col-4 mx-2 text-uppercase rounded"></input>
            <label>ESTADO:</label>
            <select className="col bg-primary text-light rounded">
              <option>NO VIGENTE</option>
              <option>VIGENTE</option>
            </select>
          </div>

        </div>
        <div className="p-1 border-top border-bottom border-dark border-3 justify-content-center banda">
          <b>DIRECCION FACTURACION</b>
        </div>
        <div className="row y-2">
          <div className="text-start py-1 mx-3">
            <label>DIRECCION:</label>
            <input className="col-4 mx-2 text-uppercase rounded"></input>
            <label>REGION:</label>
            <select className="col bg-primary text-light rounded">
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
          <div className="text-start py-1 mx-3">
            <label>COMUNA:</label>
            <input className="col-4 mx-2 text-uppercase rounded"></input>

          </div>
        </div>

        <div className="p-1 border-top border-bottom border-dark border-3 justify-content-center banda">
          <b>CONTACTO FACTURACION</b>
        </div>
        <div className="row my-2">
          <div className="text-start mx-3">
            <label>NOMBRE:</label>
            <input className="col-4 mx-2 text-uppercase rounded"></input>
            <label>TELEFONO:</label>
            <input className="col-4 mx-2 text-uppercase rounded"></input>
          </div>

        </div>
        <div className="row my-2">
          <div className="text-start mx-3">
            <label>EMAIL:</label>
            <input className="col-4 mx-2 text-uppercase rounded"></input>
            <label>CARGO:</label>
            <input className="col-4 mx-2 text-uppercase rounded"></input>
          </div>

        </div>
        <div className="p-1 border-top border-bottom border-dark border-3 justify-content-center banda">
          <b>CONTACTO COBRANZA</b>
        </div>
        <div className="row my-2">
          <div className="text-start mx-3">
            <label>NOMBRE:</label>
            <input className="col-4 mx-2 text-uppercase rounded"></input>
            <label>TELEFONO:</label>
            <input className="col-4 mx-2 text-uppercase rounded"></input>
          </div>

        </div>
        <div className="row my-2">
          <div className="text-start mx-3">
            <label>EMAIL:</label>
            <input className="col-4 mx-2 text-uppercase rounded"></input>
            <label>CARGO:</label>
            <input className="col-4 mx-2 text-uppercase rounded"></input>
          </div>

        </div>
        
       
        

      </div>


      <div className="row justify-content-center m-1">

      </div>
      <div className="col-10">
      <div className="text-end">

        <button id="btn-grabar" className="col-1 justify border border-3 border-dark btn" onClick={grabar => alert("Grabado")}><b>GRABAR</b></button>

      </div>
      </div>



    </div>
  );
};
