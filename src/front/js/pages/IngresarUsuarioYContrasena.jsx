import React, { useContext, useState } from "react";
import { useHistory } from 'react-router-use-history'
import { Context } from "../store/appContext";
import "../../styles/login.css"
import { Link } from "react-router-dom";
import logo from "../../img/LogoNewOffice.jpeg";
import "../../styles/navbar.css"
import { useNavigate } from "react-router-dom"
import rigoImageUrl from "../../img/Logo.jpg";
import Papa from 'papaparse';

import "../../styles/home.css";

export const IngresarUsuarioYContrasena = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const token = localStorage.getItem("token");
  const history = useHistory();

  const handleClick = () => {

    actions.login(username, password);

  }; 
  if (store.token && store.token != "" && store.token != undefined) history.push("/menu");
  

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
					<h3>ACCESO A SISTEMA</h3>
				</div>
				<div className="col-2 text-end">
					<p>X01-01</p>
					<div>
					
					<button id="ayuda"className="mx-2 btn border border-3 border-dark">?</button>
					</div>
				</div>
			</div>


		</nav>
      <div id="formulario" className="col-3 text-center p-5 border border-3 border-dark bg-light my-4 rounded">
        <div className="row justify-content-center mb-2">
          <h5 className="bg-primary col-10 justify border border-3 border-dark text-light rounded">USUARIO</h5>
        </div>
        <div className="row justify-content-center mb-3">
          <input type="text" className="border border-3 border-dark col-10 text-uppercase rounded" value={username} onChange={(e) => setUsername(e.target.value)}></input>
        </div>
        <div className="row justify-content-center mb-2">
          <h5 className="bg-primary col-10 justify border border-3 border-dark text-light rounded">CONTRASEÑA</h5>
        </div>
        <div className="row justify-content-center mb-3">
          <input type="password" className="border border-3 border-dark col-10 rounded" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <div className="row justify-content-center">
          <button id="btn-ingresar" className="border border-3 border-dark col-10 text-light rounded" onClick={handleClick}> <h5>INGRESAR</h5></button>
        </div>


      </div>

      <div className="row justify-content-center m-3">
          <button id="btn-recuperar-constrasena" className="border border-3 border-dark col-2 text-light rounded" onClick={CambioContrasena=> navigate("/cambiar_contrasena")}> <h6>CAMBIAR CONTRASEÑA</h6></button>
        </div>


    </div>
  );
};
