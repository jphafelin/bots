import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/botones.css"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import logo from "../../img/LogoNewOffice.jpeg";
import "../../styles/navbar.css"
import { relativeTimeRounding } from "moment";




export const Home = () => {
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
            <h3>HOME</h3>
          </div>
          <div className="col-2 text-end">
            
            <div>
              
              <button id="ayuda" className="mx-2 btn border border-3 border-dark">?</button>
            </div>
          </div>
        </div>


      </nav>





    




    </div>
  );
};
