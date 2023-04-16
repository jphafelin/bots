import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/empresa.css"
import { useNavigate } from "react-router-dom"
import rigoImageUrl from "../../img/Logo.jpg";
import Papa from 'papaparse';

import "../../styles/home.css";

export const Empresa = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();


  return (
    <div className="row containter justify-content-center">
     
      <div>
        
        <button id="btn-volver" className="col-1 m-4 justify border border-3 border-dark text-light" onClick={volver=> navigate("/menu")}>VOLVER</button>
        
      </div>

      <div className="col-3 text-center p-5 border border-3 border-dark bg-light">
        <div className="row justify-content-center mb-3">
          <button id="btn-ingresar" className="col-10 justify border border-3 border-dark text-light">I N G R E S A R</button>
        </div>
        <div className="row justify-content-center mb-3">
          <button id="btn-eliminar" className="col-10 justify border border-3 border-dark text-light">E L I M I N A R</button>
        </div>
        <div className="row justify-content-center mb-3">
          <button id="btn-modificar" className="col-10 justify border border-3 border-dark"><b>M O D I F I C A R</b></button>
        </div>
        <div className="row justify-content-center mb-3">
          <button id="btn-consultar" className="col-10 justify border border-3 border-dark text-light">C O N S U L T A R</button>
        </div>
        <div className="row justify-content-center">
          <button id="btn-reporte" className="col-10 justify border border-3 border-dark"><b>R E P O R T E</b></button>
        </div>
        

      </div>

      <div className="text-end pt-5">
        
        <button id="btn-volver" className="col-1 m-4 justify border border-3 border-dark text-light" onClick={menu=> navigate("/menu")}>MENU</button>
        
      </div>




    </div>
  );
};
