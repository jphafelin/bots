// Poner fixed-bottom a footer

import React, { Component } from "react";
import "../../styles/footer.css"

export const Footer = () => (
	<footer className="footer fixed-bottom mt-auto d-flex border border-dark border-3">
		<div className="col mx-5">USUARIO: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</div>
		
		<div className="col">DD-MM-AAAA HH:MM</div>
	</footer>
);
