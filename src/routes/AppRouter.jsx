import { useContext } from "react";
import {
  NavLink,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Acerca from "../components/Acerca";
import Articulos from "../components/Articulos";
import Contacto from "../components/Contacto";
import Error404 from "../components/Error404";
import Inicio from "../components/Inicio";
import Login from "../components/Login";
import { PruebaContext } from "../context/PruebaContext";

export default function AppRouter() {
  const { user, setUser } = useContext(PruebaContext);

  return (
    <Router>
      <nav>
        <h2>useContext</h2>
        <ul>
          <li>
            <NavLink to='/' className={({ isActive }) => (isActive ? "active" : "")}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to='/articulos' className={({ isActive }) => (isActive ? "active" : "")}>
              Artículos
            </NavLink>
          </li>
          <li>
            <NavLink to='/acerca-de' className={({ isActive }) => (isActive ? "active" : "")}>
              Acerca de
            </NavLink>
          </li>
          <li>
            <NavLink to='/contacto' className={({ isActive }) => (isActive ? "active" : "")}>
              Contacto
            </NavLink>
          </li>
          {user.nombre && user.nombre !== "" ? (
            <>
              <li>
                <span>{user.nombre}</span>
              </li>
              <li>
                <NavLink
                  to='/login'
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={() => setUser({ nombre: "", email: "" })}
                >
                  Cerrar sesión
                </NavLink>
              </li>
            </>
          ) : (
            <li>
              <NavLink to='/login' className={({ isActive }) => (isActive ? "active" : "")}>
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/articulos' element={<Articulos />} />
        <Route path='/acerca-de' element={<Acerca />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </Router>
  );
}
