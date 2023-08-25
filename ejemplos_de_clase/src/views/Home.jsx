import styles from "./Home.module.css";
import { useState, useContext } from 'react'
import { Link } from "react-router-dom";

import { AuthContext } from '../context/AuthContext';

import { useAuthEndpoints } from "../api/client";
import { posteosAPI } from "../api/posteosAPI";
import { posteosAuthAPI } from "../api/posteosAuthAPI";


const Home = () => {
  // Tomar datos del contexto
  const { auth, userName } = useContext(AuthContext);
  const [submitText, setSubmitText] = useState("");

  const eventHandler = (e)=>{
    // Prevenimos que se dispare el formulario mientras estamos en esta función:
    e.preventDefault();

    const titulo = e.target.titulo.value;
    const texto = e.target.texto.value;

    if(titulo == "" || texto == "") {
      alert("Debe ingresar titulo y texto");
      return;
    }

    const api = useAuthEndpoints? posteosAuthAPI : posteosAPI;
    api.post(userName, titulo, texto).then((response) => {
      setSubmitText(
        <Link to="/posteos">Posteo realizado, haga click aquí para verlo</Link>
      )
    }).catch( error => {
      setSubmitText("No se pudo realizar el posteo")
      alert(`No se pudo solicitar los posteos: ${error.code}`);
      // imprimir el error informado por el backend
      alert(`${error.response.status} | ${error.response.data.detail}`);
    });
    
  }

  return (
    <div className={styles.container}>
      {auth === true?
        <>
        <div>¡Bienvenido! {userName}</div>
        <form className={styles.formContainer} onSubmit={eventHandler}>
          <label htmlFor="titulo">Titulo:</label>
          <input type="text" id="titulo" name="titulo"></input>
          <label htmlFor="texto">Texto:</label>
          <textarea type="text" id="texto" name="texto" rows="4"></textarea>
          <input className={styles.submitButton} type="submit" value="Enviar posteo"></input>
          <span className={styles.submitText}>{submitText}</span>
        </form>
        </>
      :
        <div>Para poder ver los posteos debe logearse</div>
      }
    </div>
  );
};
export default Home;
