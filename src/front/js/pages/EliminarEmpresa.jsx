import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/botones.css"
import { useNavigate } from "react-router-dom"
import rigoImageUrl from "../../img/Logo.jpg";
import Papa from 'papaparse';



export const EliminarEmpresa = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();


  return (
    <div className="containter row justify-content-center dv-100">

      <div id="eliminar" className="row justify-content-center text-light border border-dark border-2 border-top-0">E L I M I N A R</div>

      <div>

        <button id="btn-volver" className="col-1 m-4 justify border border-3 border-dark text-light" onClick={volver => navigate("/empresa")}>VOLVER</button>

      </div>

      <div className="col-9 text-center border border-3 border-dark border-top-0 bg-light">

        <div className="row p-1 border-top border-bottom border-dark border-3 justify-content-center banda">
          <b>ELEGIR EMPRESA</b>
        </div>

        
        <div className="row">
         <div className="col-2 border border-dark"><b>RUT</b></div>
         <div className="col-8 border border-dark"><b>RAZON SOCIAL</b></div>
         <div className="col-2 border border-dark"><b>ESTADO</b></div>
        </div>


        <div className="row">
         <input className="col-2 text-center"></input>
         <input className="col-8"></input>
         <input className="col-2 text-center"></input>
        </div>


        <div className="eleccion">

        <div className="row" onClick={EliminarEmpresaActual => navigate("/eliminar_empresa/1")}>
         <div className="col-2 border border-dark"><b>99.999.999-A</b></div>
         <div className="col-8 border border-dark text-start"><b>MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM</b></div>
         <div className="col-2 border border-dark"><b>NO VIGENTE</b></div>
        </div>

        

        <div className="row" onClick={EliminarEmpresaActual => navigate("/eliminar_empresa/1")}>
         <div className="col-2 border border-dark"><b>99.999.999-A</b></div>
         <div className="col-8 border border-dark text-start"><b>MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM</b></div>
         <div className="col-2 border border-dark"><b>NO VIGENTE</b></div>
        </div>

        </div>
      </div>


      <div className="row justify-content-center m-3">

      </div>
      



    </div>
  );
};
