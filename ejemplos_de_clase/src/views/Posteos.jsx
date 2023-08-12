import styles from "./Posteos.module.css";

import PosteoCard from "../components/PosteoCard/PosteoCard"

// Cómo por ahora no tenemos conexión a la base de datos del backend
// hardcodeamos los datos en un array JSON en el archivo "data.js"
import { posteos } from "../data"

const Posteos = () => {
  const comics = posteos

  return (
    <div className={styles.container}>
        {   Array.isArray(comics)?
            comics.map((comicData) => {
            return (
                <PosteoCard comicData={comicData} key={comicData.id}/>
            );
        })
        :
        comics
      }
    </div>
  );
};
export default Posteos;
