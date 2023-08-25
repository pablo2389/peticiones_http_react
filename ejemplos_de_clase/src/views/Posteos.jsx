import { useEffect, useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';

import styles from "./Posteos.module.css";

import PosteoCard from "../components/PosteoCard/PosteoCard"

import { useAuthEndpoints } from "../api/client";
import { posteosAPI } from "../api/posteosAPI";
import { posteosAuthAPI } from "../api/posteosAuthAPI";

const Posteos = () => {
  // Tomar datos del contexto
  const { userName } = useContext(AuthContext);

  // Posteos
  const [posteos, setPosteos] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if(!userName) {
      console.log("username no definido")
      return // Sin un usuario no es posible leer los posteos
    }

    const api = useAuthEndpoints? posteosAuthAPI : posteosAPI;
    api.get(userName).then((response) => {
      console.table(response)
      setPosteos(response)
    }).catch( error => {
      alert(`No se pudo solicitar los posteos: ${error.code}`);

      // imprimir el error informado por el backend
      console.log(`${error.response.status} | ${error.response.data.detail}`);

      // Si el error es de autenticación, realizar el logout
      if(error.response.status === 401 || error.response.status === 403) {
        navigate("/logout");
      }
    });
  }, [userName]);

  return (
    <div className={styles.container}>
        {   Array.isArray(posteos)?
            posteos.map((posteoData) => {
            return (
                <PosteoCard posteoData={posteoData} key={posteoData.id}/>
            );
        })
        :
        <></>
      }
    </div>
  );
};
export default Posteos;
