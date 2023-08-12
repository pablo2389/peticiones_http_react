import styles from "./Login.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';

const label = (labelName, type, value, name) => {
  return (
    <label>
      {labelName}
      <input
        className={styles.inputBox}
        type={type}
        defaultValue={value}
        name={name}
      />
    </label>
  );
};

const Login = () => {
  // Tomar datos del contexto
  const { setAuth, setUserName } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  // Establecemos la función que guarda los cambios en los datos globales:
  const handleSubmit = (event) => {
    // Suspendemos el evento para evitar submits erroneos
    event.preventDefault();
    // Seteamos como autorizado al usuario
    const username = event.target.username.value;
    const password = event.target.password.value;

    if(username == "" || password == "") {
      alert("Debe ingresar username y password");
      return;
    }
    if(password !== "inoveblog") {
      alert("Password incorrecta");
      return;
    }

    // Almacenar en el storage las variable
    sessionStorage.setItem('isAuthenticated', 'true');
    sessionStorage.setItem('userName', username);

    // Cambiar el estado de las variables de autenticación
    setUserName(username);
    setAuth(true);

    // Definir a dónde deberemos realizar el redirect
    // 1 - A la página por defecto (home) 
    // 2 - A la página definida en los query URL parameters

    // Leer los query string en búsqueda del parámetro next
    const next = new URLSearchParams(location.search).get("next");

    // Si el parámetro next está definido, se hace le redirect allí,
    // de lo contrario se hace el redirect a "home"
    const redirectTo = next? next : "/"
    
    navigate(redirectTo);
    
  };

  return (
    <div className={styles.Container}>
      <div className={styles.formContainer}>
        <div className={styles.initialMessage}>
          <h1>¡Bienvenido!</h1>
          <p>Login con su usuario de inove</p>
        </div>
        <form className="loginForm" onSubmit={handleSubmit}>
          {label("Usuario:", "text", "","username")}
          {label("Contraseña:", "password", "","password")}
          <input className={styles.submitButton} type="submit" value="Log In" />
        </form>
      </div>
    </div>
  );
};
export default Login;
