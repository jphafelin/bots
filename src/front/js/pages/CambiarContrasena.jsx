import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.css"
import { Link } from "react-router-dom";
import logo from "../../img/LogoNewOffice.jpeg";
import "../../styles/navbar.css"
import rigoImageUrl from "../../img/Logo.jpg";
import Papa from 'papaparse';

import "../../styles/home.css";

export const CambiarContrasena = () => {
  const { store, actions } = useContext(Context);


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
					<h3>CAMBIAR CONTRASEÑA</h3>
				</div>
				<div className="col-2 text-end">
					<p>X01-02</p>
					<div>
					
					<button id="ayuda"className="mx-2 btn border border-3 border-dark">?</button>
					</div>
				</div>
			</div>


		</nav>

      <div id="formulario" className="col-3 text-center p-5 border border-3 border-dark bg-light rounded my-4">
        <div className="row justify-content-center mb-2">
          <h5 className="bg-primary col-10 justify border border-3 border-dark text-light rounded">USUARIO</h5>
        </div>
        <div className="row justify-content-center mb-3">
          <input type="text" className="border border-3 border-dark col-10 text-uppercase rounded"></input>
        </div>
        <div className="row justify-content-center mb-2">
          <h5 className="bg-primary col-10 justify border border-3 border-dark text-light rounded">KEY ENVIADA A CORREO</h5>
        </div>
        <div className="row justify-content-center mb-3">
          <input type="text" className="border border-3 border-dark col-10 rounded"></input>
        </div>
        <div className="row justify-content-center mb-2">
          <h5 className="bg-primary col-10 justify border border-3 border-dark text-light rounded">CONTRASEÑA NUEVA</h5>
        </div>
        <div className="row justify-content-center mb-3">
          <input type="password" className="border border-3 border-dark col-10 rounded"></input>
        </div>
        <div className="row justify-content-center">
          <button id="btn-recuperar-constrasena" className="border border-3 border-dark col-10 text-light rounded"> <h5>CAMBIAR CONTRASEÑA</h5></button>
        </div>


      </div>




    </div>
  );
};
