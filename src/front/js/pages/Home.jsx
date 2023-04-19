import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import logo from "../../img/LogoNewOffice.jpeg";
import "../../styles/navbar.css"
import rigoImageUrl from "../../img/Logo.jpg";
import Papa from 'papaparse';

import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);


  return (
    <div className="text-center mt-5">
      <nav className="navbar p-1">
			<div className="container-fluid row">
				<div className="col-2">
					<Link to="/menu">
						<img src={logo} height="60px"></img>
					</Link>
				</div>
				<div className="col-8 text-center justify-content-start ">
					<h3>HOME</h3>
				</div>
				<div className="col-2 text-end">
					<p>XXXXX</p>
					<div>
					<button id="cerrar-sesion" className="text-light btn border border-3 border-dark">CERRAR SESION</button>
					<button id="ayuda"className="mx-2 btn border border-3 border-dark">?</button>
					</div>
				</div>
			</div>


		</nav>
    </div>
  );
};
