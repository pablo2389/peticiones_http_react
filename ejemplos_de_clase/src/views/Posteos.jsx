import { useEffect, useState, useContext } from "react";
import { AuthContext } from '../context/AuthContext';

import styles from "./Posteos.module.css";

import PosteoCard from "../components/PosteoCard/PosteoCard"

import { useAuthEndpoints } from "../api/client";
import { PosteosAPI } from "../api/PosteosAPI";
import { PosteosAuthAPI } from "../api/PosteosAuthAPI";

const Posteos = () => {
  // Tomar datos del contexto
  const { userName } = useContext(AuthContext);

  // Posteos
  const [posteos, setPosteos] = useState([]);

  useEffect(() => {
    if(!userName) {
      console.log("username no definido")
      return // Sin un usuario no es posible leer los posteos
    }

    const api = useAuthEndpoints? PosteosAuthAPI : PosteosAPI;
    api.get(userName).then((response) => {
      console.table(response)
      setPosteos(response)
    }).catch( error => {
      alert(`No se pudo solicitar los posteos: ${error.code}`);
      // imprimir el error informado por el backend
      alert(`${error.response.status} | ${error.response.data.detail}`);
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
