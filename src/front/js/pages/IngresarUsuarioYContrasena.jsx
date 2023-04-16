import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.css"
import { useNavigate } from "react-router-dom"
import rigoImageUrl from "../../img/Logo.jpg";
import Papa from 'papaparse';

import "../../styles/home.css";

export const IngresarUsuarioYContrasena = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();


  return (
    <div className="containter row justify-content-center dv-100 mt-5 pt-5">

      <div className="col-3 text-center p-5 border border-3 border-dark bg-light">
        <div className="row justify-content-center mb-2">
          <h5 className="bg-primary col-10 justify border border-3 border-dark text-light">USUARIO</h5>
        </div>
        <div className="row justify-content-center mb-3">
          <input type="text" className="border border-3 border-dark col-10 text-uppercase"></input>
        </div>
        <div className="row justify-content-center mb-2">
          <h5 className="bg-primary col-10 justify border border-3 border-dark text-light">CONTRASEÑA</h5>
        </div>
        <div className="row justify-content-center mb-3">
          <input type="password" className="border border-3 border-dark col-10"></input>
        </div>
        <div className="row justify-content-center">
          <button id="btn-ingresar" className="border border-3 border-dark col-10 text-light"> <h5>INGRESAR</h5></button>
        </div>


      </div>

      <div className="row justify-content-center m-3">
          <button id="btn-recuperar-constrasena" className="border border-3 border-dark col-2 text-light" onClick={CambioContrasena=> navigate("/cambiar_contrasena")}> <h6>CAMBIAR CONTRASEÑA</h6></button>
        </div>


    </div>
  );
};
