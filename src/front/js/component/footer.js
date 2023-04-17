// Poner fixed-bottom a footer

import React, { Component } from "react";
import "../../styles/footer.css"

export const Footer = () => {
	var moment = require('moment');
 
	// obtener el nombre del mes, día del mes, año, hora
	var now = moment().format("DD/MM/YYYY HH:mm");
	console.log(now);
	return(
		
	<footer className="footer fixed-bottom mt-auto d-flex border border-dark border-3">
		<div className="col mx-5">USUARIO: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</div>
		
		<div className="col">{now}</div>
	</footer>
);
};