import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/empresa.css"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import logo from "../../img/LogoNewOffice.jpeg";
import "../../styles/navbar.css"
import rigoImageUrl from "../../img/Logo.jpg";
import Papa from 'papaparse';

import "../../styles/home.css";

export const Empresa = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();


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
            <h3>EMPRESA</h3>
          </div>
          <div className="col-2 text-end">
            <p>X04-I1</p>
            <div>
              <button id="cerrar-sesion" className="text-light btn border border-3 border-dark">CERRAR SESION</button>
              <button id="ayuda" className="mx-2 btn border border-3 border-dark">?</button>
            </div>
          </div>
        </div>


      </nav>
     
      <div>
        
        <button id="btn-volver" className="col-1 m-4 justify border border-3 border-dark text-light" onClick={volver=> navigate("/menu")}>VOLVER</button>
        
      </div>

      <div id="formulario" className="col-3 text-center p-5 border border-3 border-dark bg-light">
        <div className="row justify-content-center mb-3">
          <button id="btn-ingresar" className="col-10 justify border border-3 border-dark text-light" onClick={IngresarEmpresa=> navigate("/ingresar_empresa")}>I N G R E S A R</button>
        </div>
        <div className="row justify-content-center mb-3">
          <button id="btn-eliminar" className="col-10 justify border border-3 border-dark text-light" onClick={EliminarEmpresa=> navigate("/eliminar_empresa")}>E L I M I N A R</button>
        </div>
        <div className="row justify-content-center mb-3">
          <button id="btn-modificar" className="col-10 justify border border-3 border-dark" onClick={EliminarEmpresa=> navigate("/modificar_empresa")}><b>M O D I F I C A R</b></button>
        </div>
        <div className="row justify-content-center mb-3">
          <button id="btn-consultar" className="col-10 justify border border-3 border-dark text-light" onClick={EliminarEmpresa=> navigate("/consultar_empresa")}>C O N S U L T A R</button>
        </div>
        <div className="row justify-content-center">
          <button id="btn-reporte" className="col-10 justify border border-3 border-dark" onClick={EliminarEmpresa=> navigate("/reporte_empresa")}><b>R E P O R T E</b></button>
        </div>
        

      </div>

      <div className="text-end pt-5">
        
        <button id="btn-volver" className="col-1 m-4 justify border border-3 border-dark text-light" onClick={menu=> navigate("/menu")}>MENU</button>
        
      </div>




    </div>
  );
};
