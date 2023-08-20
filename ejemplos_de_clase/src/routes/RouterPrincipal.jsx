import { useState, useEffect } from "react";

// Importamos React Router:
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Importamos componentes visuales:
import LoginRedirect from "../views/LoginRedirect";
import Profile from "../views/Profile";
import Logout from "../views/Logout";
import Home from "../views/Home";
import Posteos from "../views/Posteos";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

import RutaProtectedRedirect from "./RutaProtectedRedirect"

// Importar contexto
import { AuthContext, initAutenticacion, initUser } from '../context/AuthContext';


const RouterPrincipal = () => {
  const [auth, setAuth] = useState(initAutenticacion());
  const [userName, setUserName] = useState(initUser());


  return (
      <AuthContext.Provider value={{ auth, setAuth, userName, setUserName }}>
        <BrowserRouter>
          <div className="navbar-container">
            <Navbar auth={auth}/>
          </div>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LoginRedirect />} />
            <Route path='/logout' element={<Logout />} />

            <Route path='/' element={<RutaProtectedRedirect />}>
              <Route path='posteos' element={<Posteos />} />
              <Route path='perfil' element={<Profile />} />
            </Route>
          </Routes>

          <div className="footer-container">
            <Footer />
          </div>

        </BrowserRouter>
      </AuthContext.Provider>
  );
}

export default RouterPrincipal;
