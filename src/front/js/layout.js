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
import { Bots } from "./pages/Bots.jsx";


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
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Filtro />} path="/filtro" />

                        <Route element={<IngresarUsuarioYContrasena />} path="/login" />
                        <Route element={<CambiarContrasena />} path="/cambiar_contrasena" />
                        <Route element={<MenuPrincipal />} path="/menu" />
                        <Route element={<Empresa />} path="/empresa" />
                        <Route element={<Usuario />} path="/usuario" />
                        <Route element={<Bots />} path="/bots" />

                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                   
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);