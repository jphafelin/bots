import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import logo from "../../img/LogoNewOffice.jpeg";
import "../../styles/navbar.css"

import { useNavigate } from "react-router-dom"
import rigoImageUrl from "../../img/Logo.jpg";
import Papa from 'papaparse';

import "../../styles/home.css";

export const MenuPrincipal = () => {
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
					<h3>MENU PRINCIPAL</h3>
				</div>
				<div className="col-2 text-end">
					<p>X03-01</p>
					<div>
					<button id="cerrar-sesion" className="text-light btn border border-3 border-dark">CERRAR SESION</button>
					<button id="ayuda"className="mx-2 btn border border-3 border-dark">?</button>
					</div>
				</div>
			</div>


		</nav>

      <div id="formulario" className="col-3 text-center p-5 my-5 border border-3 border-dark bg-light">
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
