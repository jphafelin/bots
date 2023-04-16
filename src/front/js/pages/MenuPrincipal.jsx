import React, { useContext } from "react";
import { Context } from "../store/appContext";

import { useNavigate } from "react-router-dom"
import rigoImageUrl from "../../img/Logo.jpg";
import Papa from 'papaparse';

import "../../styles/home.css";

export const MenuPrincipal = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();


  return (
    <div className="containter row justify-content-center dv-100 mt-5 pt-5">

      <div className="col-3 text-center p-5 border border-3 border-dark bg-light">
        <div className="row justify-content-center mb-3">
          <button className="bg-primary col-10 justify border border-3 border-dark text-light" onClick={empresa=> navigate("/empresa")}>EMPRESA</button>
        </div>
        <div className="row justify-content-center mb-3">
          <button className="bg-primary col-10 justify border border-3 border-dark text-light" onClick={empresa=> navigate("/bots")}>BOTS</button>
        </div>
        <div className="row justify-content-center">
          <button className="bg-primary col-10 justify border border-3 border-dark text-light" onClick={empresa=> navigate("/usuario")}>USUARIO</button>
        </div>

      </div>




    </div>
  );
};
