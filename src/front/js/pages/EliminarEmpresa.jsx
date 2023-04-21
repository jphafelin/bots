import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/botones.css"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import logo from "../../img/LogoNewOffice.jpeg";
import "../../styles/navbar.css"
import rigoImageUrl from "../../img/Logo.jpg";
import Papa from 'papaparse';



export const EliminarEmpresa = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const myArray = store.tipo_evento;
  function editAdmin(key, user) {
    console.log(key)
    
    localStorage.setItem("id_empresa", key)
    

    return navigate("/eliminar_empresa/1");
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
            <h3>ELIMINAR EMPRESA</h3>
          </div>
          <div className="col-2 text-end">
            <p>X04-I1</p>
            <div>
              <button id="cerrar-sesion" className="text-light btn border border-3 border-dark">CERRAR SESION</button>
              <button id="ayuda" className="mx-2 btn border border-3 border-dark">?</button>
            </div>
          </div>
        </div>


      </nav>

      <div id="eliminar-titulo" className="justify-content-center text-light text-center border border-dark border-2 border-top-0">E L I M I N A R</div>
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
          <input className="col-2 text-center"></input>
          <input className="col-8"></input>
          <input className="col-2 text-center"></input>
        </div>


        <div className="eleccion">
          {myArray.length === 0 ? (
            <h1><span className="spam_no">No element in Array</span></h1>
          ) : (
            myArray.map((item, key = item.id) => (

              <div key={key} className="d-flex" onClick={()=>editAdmin(item.id, item.id_user)}>
                <div className="col-2 border border-dark"><b>{item.rut}</b></div>
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
