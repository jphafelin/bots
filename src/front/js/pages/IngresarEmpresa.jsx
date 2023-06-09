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
import axios from 'axios';




export const IngresarEmpresa = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const listaIngresar = [];
  const [csvData, setCsvData] = useState([]);
  const [id, setId] = useState("");


  useEffect(() => {
    fetch("https://8080-jphafelin-bots-4n5iqce0jkk.ws-eu96b.gitpod.io/tx_emp_prueba.csv")
      .then(response => response.text())
      .then(csvText => {
        const csvRows = csvText.split("\n");
        const csvDataArray = csvRows.map(row => row.split(","));
        setId(csvDataArray.length-1);
        setCsvData(csvDataArray);

      })
      .catch(error => console.error(error));
  }, []);

  



 
  

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
  const [value15, setValue15] = useState("");
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
      const valuerut = event.target.value.replace(/\D/g, '');
      const formattedValue = parseInt(valuerut).toLocaleString('es-AR');
      if (isNaN(parseInt(valuerut))) {
        setValue2('');
      } else {
        setValue2(formattedValue);
      }
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
  function handleChange15(event) {
    if (event.target.value.indexOf(";") !== -1) {
      alert("El carácter ';' no está permitido en este campo.");
      setValue15(event.target.value.replace(";", ""));
    } else {
      setValue15(event.target.value);
    }
  }
  function handleKeyPress(event) {
    if (event.key === ";") {
      event.preventDefault();
    }
  }
  const grabar = () =>{

    var moment = require('moment');
 
	// obtener el nombre del mes, día del mes, año, hora
	  var now = moment().format("DD/MM/YYYY HH:mm");

    listaIngresar.push(id.toString());
    listaIngresar.push(value.toUpperCase());
    listaIngresar.push(value2.toUpperCase());
    listaIngresar.push(value3.toUpperCase());
    listaIngresar.push(value4.toUpperCase());
    listaIngresar.push(value5.toUpperCase());
    listaIngresar.push(value6.toUpperCase());
    listaIngresar.push(value7.toUpperCase());
    listaIngresar.push(value8.toUpperCase());
    listaIngresar.push(value9.toUpperCase());
    listaIngresar.push(value10.toUpperCase());
    listaIngresar.push(value11.toUpperCase());
    listaIngresar.push(value12.toUpperCase());
    listaIngresar.push(value13.toUpperCase());
    listaIngresar.push(value14.toUpperCase());
    listaIngresar.push(value15.toUpperCase());
    listaIngresar.push("1");
    listaIngresar.push(now.toUpperCase());
    listaIngresar.push("1");
    listaIngresar.push(now.toUpperCase());
    listaIngresar.push(selectedOption.toUpperCase());
    listaIngresar.push(selectedOption2.toUpperCase());

    
    console.log("ESTA ES LA LISTA", listaIngresar);

    setCsvData(listaIngresar);

    console.log("NUEVA LISTA", csvData);

    

  const csv = Papa.unparse(csvData); // Convierte el array a CSV
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" }); // Crea un objeto Blob
  const url = URL.createObjectURL(blob); // Crea una URL para descargar el archivo

  // Crea un enlace y lo simula para descargar el archivo
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", "data.csv");
  document.body.appendChild(link);
  //link.click();
  document.body.removeChild(link);
  console.log("HECHO")

     

 
     
   
   

       
       //alert("Empresa Creada")
       //navigate("/empresa")
       
       //location.reload();
      

     
     
     
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
            <input className="casilla-id col bg-light rounded" maxlength="4" value={id} disabled="disabled"></input>
            <label className="label-razon-social">RAZON SOCIAL:</label>
            <input className=" casilla-razon-social col-6 text-uppercase rounded" maxlength="45" value={value}
      onChange={handleChange}
      onKeyPress={handleKeyPress}></input>
            <label className="label-rut">RUT:</label>
            <input className="casilla-rut col-2 text-uppercase rounded" maxlength="10" value={value2}
      onChange={handleChange2}
      onKeyPress={handleKeyPress}></input>
      -
      <input className="casilla-rut-verificador col-2 text-uppercase rounded" maxlength="1" value={value15}
      onChange={handleChange15}
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
