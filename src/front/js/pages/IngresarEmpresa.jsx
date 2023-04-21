import React, { useContext, useState, useEffect } from "react";

import { Context } from "../store/appContext";
import "../../styles/botones.css"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import logo from "../../img/LogoNewOffice.jpeg";
import "../../styles/navbar.css"
import rigoImageUrl from "../../img/Logo.jpg";
import Papa from 'papaparse';
import { relativeTimeRounding } from "moment";



export const IngresarEmpresa = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
 
  

  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [value6, setValue6] = useState("");
  const [value7, setValue7] = useState("");
  const [value8, setValue8] = useState("");
  const [value9, setValue9] = useState("");
  const [value10, setValue10] = useState("");
  const [value11, setValue11] = useState("");
  const [value12, setValue12] = useState("");
  const [value13, setValue13] = useState("");
  const [value14, setValue14] = useState("");
  const [selectedOption, setSelectedOption] = useState("VIGENTE");
  const [selectedOption2, setSelectedOption2] = useState("01");



  function handleSelect(event) {
    setSelectedOption(event.target.value);
  }

  function handleSelect2(event) {
    setSelectedOption2(event.target.value);
  }

  function handleChange(event) {
    if (event.target.value.indexOf(";") !== -1) {
      alert("El carácter ';' no está permitido en este campo.");
      setValue(event.target.value.replace(";", ""));
    } else {
      setValue(event.target.value);
    }
  }
  function handleChange2(event) {
    if (event.target.value.indexOf(";") !== -1) {
      alert("El carácter ';' no está permitido en este campo.");
      setValue2(event.target.value.replace(";", ""));
    } else {
      setValue2(event.target.value);
    }
  }
  function handleChange3(event) {
    if (event.target.value.indexOf(";") !== -1) {
      alert("El carácter ';' no está permitido en este campo.");
      setValue3(event.target.value.replace(";", ""));
    } else {
      setValue3(event.target.value);
    }
  }
  function handleChange4(event) {
    if (event.target.value.indexOf(";") !== -1) {
      alert("El carácter ';' no está permitido en este campo.");
      setValue4(event.target.value.replace(";", ""));
    } else {
      setValue4(event.target.value);
    }
  }
  function handleChange5(event) {
    if (event.target.value.indexOf(";") !== -1) {
      alert("El carácter ';' no está permitido en este campo.");
      setValue5(event.target.value.replace(";", ""));
    } else {
      setValue5(event.target.value);
    }
  }
  function handleChange6(event) {
    if (event.target.value.indexOf(";") !== -1) {
      alert("El carácter ';' no está permitido en este campo.");
      setValue6(event.target.value.replace(";", ""));
    } else {
      setValue6(event.target.value);
    }
  }
  function handleChange7(event) {
    if (event.target.value.indexOf(";") !== -1) {
      alert("El carácter ';' no está permitido en este campo.");
      setValue7(event.target.value.replace(";", ""));
    } else {
      setValue7(event.target.value);
    }
  }
  function handleChange8(event) {
    if (event.target.value.indexOf(";") !== -1) {
      alert("El carácter ';' no está permitido en este campo.");
      setValue8(event.target.value.replace(";", ""));
    } else {
      setValue8(event.target.value);
    }
  }
  function handleChange9(event) {
    if (event.target.value.indexOf(";") !== -1) {
      alert("El carácter ';' no está permitido en este campo.");
      setValue9(event.target.value.replace(";", ""));
    } else {
      setValue9(event.target.value);
    }
  }
  function handleChange10(event) {
    if (event.target.value.indexOf(";") !== -1) {
      alert("El carácter ';' no está permitido en este campo.");
      setValue10(event.target.value.replace(";", ""));
    } else {
      setValue10(event.target.value);
    }
  }
  function handleChange11(event) {
    if (event.target.value.indexOf(";") !== -1) {
      alert("El carácter ';' no está permitido en este campo.");
      setValue11(event.target.value.replace(";", ""));
    } else {
      setValue11(event.target.value);
    }
  }
  function handleChange12(event) {
    if (event.target.value.indexOf(";") !== -1) {
      alert("El carácter ';' no está permitido en este campo.");
      setValue12(event.target.value.replace(";", ""));
    } else {
      setValue12(event.target.value);
    }
  }
  function handleChange13(event) {
    if (event.target.value.indexOf(";") !== -1) {
      alert("El carácter ';' no está permitido en este campo.");
      setValue13(event.target.value.replace(";", ""));
    } else {
      setValue13(event.target.value);
    }
  }
  function handleChange14(event) {
    if (event.target.value.indexOf(";") !== -1) {
      alert("El carácter ';' no está permitido en este campo.");
      setValue14(event.target.value.replace(";", ""));
    } else {
      setValue14(event.target.value);
    }
  }
  function handleKeyPress(event) {
    if (event.key === ";") {
      event.preventDefault();
    }
  }
  const grabar = () =>{
    var myHeaders = new Headers();
     myHeaders.append("Content-Type", "application/json");

     var raw = JSON.stringify({
     
     "razon_social": value.toUpperCase(),
     "rut": value2.toUpperCase(),
     "estado": selectedOption,
     "nombre_fantasia": value3.toUpperCase(),
     "giro": value4.toUpperCase(),
     "direccion_facturacion": value5.toUpperCase(),
     "region": selectedOption2,
     "comuna": value6.toUpperCase(),
     "nombre_contacto_facturacion": value7.toUpperCase(),
     "telefono_contacto_facturacion": value8.toUpperCase(),
     "email_contacto_facturacion": value9.toUpperCase(),
     "cargo_contacto_facturacion": value10.toUpperCase(),
     "nombre_contacto_cobranza": value11.toUpperCase(),
     "telefono_contacto_cobranza": value12.toUpperCase(),
     "email_contacto_cobranza": value13.toUpperCase(),
     "cargo_contacto_cobranza": value14.toUpperCase(),
     

     });

     var requestOptions = {
       method: 'POST',
       headers: myHeaders,
       body: raw,
       redirect: 'follow'
     };
     const host = process.env.BACKEND_URL;
     fetch("https://3001-jphafelin-bots-4vnpaal1fna.ws-eu95.gitpod.io/api/empresa", requestOptions)
       .then(response => response.text())
       .then(result => console.log(result))
       .catch(error => console.log('error', error));

       alert("Empresa Creada")
       navigate("/empresa")
       
       location.reload();
      

     
     
     
     //return (
     //    <div class="alert alert-primary" role="alert">
     //        A simple primary alert—check it out!
     //    </div>)
 }



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
					<h3>INGRESAR EMPRESA</h3>
				</div>
				<div className="col-2 text-end">
					<p>X04-I1</p>
					<div>
					<button id="cerrar-sesion" className="text-light btn border border-3 border-dark">CERRAR SESION</button>
					<button id="ayuda"className="mx-2 btn border border-3 border-dark">?</button>
					</div>
				</div>
			</div>


		</nav>

      <div id="ingresar-titulo" className="justify-content-center text-light text-center border border-dark border-2 border-top-0">I N G R E S A R</div>
      <div>

        <button id="btn-volver" className="btn col-1 m-1 justify border border-3 border-dark text-light" onClick={volver => navigate("/empresa")}>VOLVER</button>

      </div>

      <div id="formulario" className="col-8 text-center py-1 border border-3 border-dark bg-light">
        <div className="row">
          <div className="text-start mx-3">
            <label className="label-id">ID:</label>
            <input className="casilla-id col bg-light rounded" maxlength="4" value="" disabled="disabled"></input>
            <label className="label-razon-social">RAZON SOCIAL:</label>
            <input className=" casilla-razon-social col-6 text-uppercase rounded" maxlength="45" value={value}
      onChange={handleChange}
      onKeyPress={handleKeyPress}></input>
            <label className="label-rut">RUT:</label>
            <input className="casilla-rut col-2 text-uppercase rounded" maxlength="12" value={value2}
      onChange={handleChange2}
      onKeyPress={handleKeyPress}></input>
            <label className="label-estado">ESTADO:</label>
            <select className="col bg-primary text-light rounded" onChange={handleSelect}>
              <option>VIGENTE</option>
              <option>NO VIGENTE</option>

            </select>
          </div>

        </div>
        <div className="row my-2">
          <div className="text-start mx-3">
            
            <label>NOMBRE FANTASIA:</label>
            <input className="casilla-nombre-fantasia col-6 text-uppercase rounded" maxlength="40" value={value3}
      onChange={handleChange3}
      onKeyPress={handleKeyPress}></input>
            <label className="label-giro">GIRO:</label>
            <input className="casilla-giro col-4 text-uppercase rounded" maxlength="40" value={value4}
      onChange={handleChange4}
      onKeyPress={handleKeyPress}></input>
          </div>

        </div>
       
        <div className="border-top border-bottom border-dark border-3 justify-content-center banda">
          <b>DIRECCION FACTURACION</b>
        </div>
        <div className="row my-1">
          <div className="text-start py-1 mx-3">
            <label>DIRECCION:</label>
            <input className="casilla-direccion col-4 text-uppercase rounded" maxlength="40" value={value5}
      onChange={handleChange5}
      onKeyPress={handleKeyPress}></input>
            <label className="label-region">REGION:</label>
            <select className="col bg-primary text-light rounded" onChange={handleSelect2}>
              <option>01</option>
              <option>02</option>
              <option>03</option>
              <option>04</option>
              <option>05</option>
              <option>06</option>
              <option>07</option>
              <option>08</option>
              <option>09</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>RM</option>
              <option>14</option>
              <option>15</option>

            </select>
            <label className="label-comuna">COMUNA:</label>
            <input className="casilla-comuna col-4 text-uppercase rounded" maxlength="20" value={value6}
      onChange={handleChange6}  
      onKeyPress={handleKeyPress}></input>
          </div>
        </div>
        

        <div className="border-top border-bottom border-dark border-3 justify-content-center banda">
          <b>CONTACTO FACTURACION</b>
        </div>
        <div className="row my-2">
          <div className="text-start mx-3">
            <label>NOMBRE:</label>
            <input className="casilla-nombre col-4 text-uppercase rounded" maxlength="35" value={value7}
      onChange={handleChange7}
      onKeyPress={handleKeyPress}></input>
            <label className="label-telefono">TELEFONO:</label>
            <input className="casilla-telefono col-4 text-uppercase rounded" maxlength="25" value={value8}
      onChange={handleChange8}
      onKeyPress={handleKeyPress}></input>
          </div>

        </div>
        <div className="row my-2">
          <div className="text-start mx-3">
            <label>EMAIL:</label>
            <input className="casilla-email col-4 text-uppercase rounded" maxlength="42" value={value9}
      onChange={handleChange9}
      onKeyPress={handleKeyPress}></input>
            <label className="label-cargo">CARGO:</label>
            <input className="casilla-cargo col-4 text-uppercase rounded" maxlength="23" value={value10}
      onChange={handleChange10}
      onKeyPress={handleKeyPress}></input>
          </div>

        </div>
        <div className="border-top border-bottom border-dark border-3 justify-content-center banda">
          <b>CONTACTO COBRANZA</b>
        </div>
        <div className="row my-2">
          <div className="text-start mx-3">
            <label>NOMBRE:</label>
            <input className="casilla-nombre col-4 text-uppercase rounded" maxlength="35" value={value11}
      onChange={handleChange11}
      onKeyPress={handleKeyPress}></input>
            <label className="label-telefono">TELEFONO:</label>
            <input className="casilla-telefono col-4 text-uppercase rounded" maxlength="25" value={value12}
      onChange={handleChange12}
      onKeyPress={handleKeyPress}></input>
          </div>

        </div>
        <div className="row my-2">
          <div className="text-start mx-3">
            <label>EMAIL:</label>
            <input className="casilla-email col-4 text-uppercase rounded" maxlength="42" value={value13}
      onChange={handleChange13}
      onKeyPress={handleKeyPress}></input>
            <label className="label-cargo">CARGO:</label>
            <input className="casilla-cargo col-4 text-uppercase rounded" maxlength="23" value={value14}
      onChange={handleChange14}
      onKeyPress={handleKeyPress}></input>
          </div>

        </div>
        
       
        

      </div>


      <div className="row justify-content-center m-1">

      </div>
      <div className="col-10">
      <div className="text-end">

        <button id="btn-grabar" className="col-1 justify border border-3 border-dark btn" onClick={grabar}><b>GRABAR</b></button>

      </div>
      </div>



    </div>
  );
};
