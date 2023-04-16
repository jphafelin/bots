import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/Logo.jpg";
import "../../styles/navbar.css"

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container-fluid row">
				<div className="col-2">
					<Link to="/">
						<img src="Logo.jpg"></img>
					</Link>
				</div>
				<div className="col-8 text-center justify-content-start">
					<h3>NOMBRE DE LA PÁGINA</h3>
				</div>
				<div className="col-2">
					
				</div>
			</div>


		</nav>
	);
};
