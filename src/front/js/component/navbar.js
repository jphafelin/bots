import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/LogoNewOffice.jpeg";
import "../../styles/navbar.css"

export const Navbar = () => {
	return (
		<nav className="navbar p-0 m-0">
			<div className="container-fluid row">
				<div className="col-2">
					<Link to="/menu">
						<img src={logo} height="70px"></img>
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
