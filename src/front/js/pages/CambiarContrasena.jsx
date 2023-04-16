import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.css"
import rigoImageUrl from "../../img/Logo.jpg";
import Papa from 'papaparse';

import "../../styles/home.css";

export const CambiarContrasena = () => {
  const { store, actions } = useContext(Context);


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
          <h5 className="bg-primary col-10 justify border border-3 border-dark text-light">KEY ENVIADA A CORREO</h5>
        </div>
        <div className="row justify-content-center mb-3">
          <input type="text" className="border border-3 border-dark col-10"></input>
        </div>
        <div className="row justify-content-center mb-2">
          <h5 className="bg-primary col-10 justify border border-3 border-dark text-light">CONTRASEÑA NUEVA</h5>
        </div>
        <div className="row justify-content-center mb-3">
          <input type="password" className="border border-3 border-dark col-10"></input>
        </div>
        <div className="row justify-content-center">
          <button id="btn-recuperar-constrasena" className="border border-3 border-dark col-10 text-light"> <h5>CAMBIAR CONTRASEÑA</h5></button>
        </div>


      </div>




    </div>
  );
};
