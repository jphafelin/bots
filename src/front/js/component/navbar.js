import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/LogoNewOffice.jpeg";
import "../../styles/navbar.css"

export const Navbar = () => {
	return (
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
					<p>X04-|1</p>
					<div>
					<button id="cerrar-sesion">CERRAR SESION</button>
					<button id="ayuda"className="mx-2">?</button>
					</div>
				</div>
			</div>


		</nav>
	);
};
