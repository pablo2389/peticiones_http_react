import styles from "./Home.module.css";
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';

const Home = () => {
  // Tomar datos del contexto
  const { auth, userName } = useContext(AuthContext);

  return (
    <div className={styles.container}>
      {auth === true?
        <div>¡Bienvenido! {userName}</div>
      :
        <div>Para poder ver los posteos debe logearse</div>
      }
    </div>
  );
};
export default Home;
