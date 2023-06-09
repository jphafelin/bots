import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/botones.css"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import logo from "../../img/LogoNewOffice.jpeg";
import "../../styles/navbar.css"
import { relativeTimeRounding } from "moment";




export const ConsultarEmpresa = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const myArray = store.tipo_evento;

  const [searchTerm, setSearchTerm] = useState('');
  const [searchTerm2, setSearchTerm2] = useState('');
  const [searchTerm3, setSearchTerm3] = useState('');



  function editAdmin(key, user) {
    console.log(key)
    
    localStorage.setItem("id_empresa", key)
    
    setTimeout(() => {
      location.reload();
      
    }, 1)
    
    return navigate("/consultar_empresa/1");
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
            <h3>CONSULTAR EMPRESA</h3>
          </div>
          <div className="col-2 text-end">
            <p>X04-C1</p>
            <div>
              <button id="cerrar-sesion" className="text-light btn border border-3 border-dark">CERRAR SESION</button>
              <button id="ayuda" className="mx-2 btn border border-3 border-dark">?</button>
            </div>
          </div>
        </div>


      </nav>

      <div id="consultar-titulo" className="justify-content-center text-light text-center border border-dark border-2 border-top-0">C O N S U L T A R</div>
      <div>
      <button id="btn-volver" className="btn col-1 m-1 justify border border-3 border-dark text-light" onClick={volver => navigate("/empresa")}>VOLVER</button>
      </div>

      <div id="formulario" className="col-9 text-center border border-3 border-dark border-top-0 bg-light">

        <div className="p-1 border-top border-bottom border-dark border-3 justify-content-center banda">
          <b>ELEGIR EMPRESA</b>
        </div>


        <div className="d-flex">
          <div className="col-2 border border-dark"><b>RUT</b></div>
          <div className="col-8 border border-dark"><b>RAZON SOCIAL</b></div>
          <div className="col-2 border border-dark"><b>ESTADO</b></div>
        </div>


        <div className="d-flex">
          
        <input className="col-2" type="text" value={searchTerm.toUpperCase()} onChange={e => setSearchTerm(e.target.value)} />
        <input className="col-8" type="text" value={searchTerm2.toUpperCase()} onChange={e => setSearchTerm2(e.target.value)} />
        <input className="col-2" type="text" value={searchTerm3.toUpperCase()} onChange={e => setSearchTerm3(e.target.value)} />
        </div>


        <div className="eleccion">
          {myArray.length === 0 ? (
            <h1><span className="spam_no">No element in Array</span></h1>
          ) : (
            myArray
  .filter(item => {
    const searchRegex = new RegExp(searchTerm, 'i');
    const searchRegex2 = new RegExp(searchTerm2, 'i');
    const searchRegex3 = new RegExp(searchTerm3, 'i');
    const rut_completo = item.rut +"-"+ item.rut_verificador;
    return searchRegex.test(rut_completo) && searchRegex2.test(item.razon_social) && searchRegex3.test(item.estado);
  })
  .map((item, key = item.id) => (
    <div key={key} className="d-flex" onClick={()=>editAdmin(item.id)}>
      <div className="col-2 border border-dark"><b>{item.rut}-{item.rut_verificador}</b></div>
      <div className="col-8 border border-dark text-start"><b className="mx-2">{item.razon_social}</b></div>
      <div className="col-2 border border-dark"><b>{item.estado}</b></div>
    </div>
  ))
          )}
        </div>
      </div>


      <div className="row justify-content-center m-3">

      </div>




    </div>
  );
};