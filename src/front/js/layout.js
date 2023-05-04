import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/Home.jsx";
import { Filtro } from "./pages/Filtro.jsx";

import { IngresarUsuarioYContrasena } from "./pages/IngresarUsuarioYContrasena.jsx";
import { CambiarContrasena } from "./pages/CambiarContrasena.jsx";
import { MenuPrincipal } from "./pages/MenuPrincipal.jsx";
import { Empresa } from "./pages/Empresa.jsx";
import { Usuario } from "./pages/Usuario.jsx";

import { IngresarEmpresa } from "./pages/IngresarEmpresa.jsx";
import { EliminarEmpresa } from "./pages/EliminarEmpresa.jsx";
import { EliminarEmpresaCopy } from "./pages/EliminarEmpresaCopy.jsx";
import { EliminarEmpresaId } from "./pages/EliminarEmpresaId.jsx";
import { ModificarEmpresa } from "./pages/ModificarEmpresa.jsx";
import { ModificarEmpresaId } from "./pages/ModificarEmpresaId.jsx";
import { ConsultarEmpresa } from "./pages/ConsultarEmpresa.jsx";
import { ConsultarEmpresaId } from "./pages/ConsultarEmpresaId.jsx";


import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Filtro />} path="/filtro" />

                        <Route element={<IngresarUsuarioYContrasena />} path="/login" />
                        <Route element={<CambiarContrasena />} path="/cambiar_contrasena" />
                        <Route element={<MenuPrincipal />} path="/menu" />
                        <Route element={<Empresa />} path="/empresa" />
                        <Route element={<IngresarEmpresa />} path="/ingresar_empresa" />
                        <Route element={<EliminarEmpresa />} path="/eliminar_empresa" />
                        <Route element={<EliminarEmpresaId />} path="/eliminar_empresa/1" />
                        <Route element={<ModificarEmpresa />} path="/modificar_empresa" />
                        <Route element={<ModificarEmpresaId />} path="/modificar_empresa/1" />
                        <Route element={<ConsultarEmpresa />} path="/consultar_empresa" />
                        <Route element={<ConsultarEmpresaId />} path="/consultar_empresa/1" />
                        <Route element={<Usuario />} path="/usuario" />
                        

                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                   
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
