import styles from "./Navbar.module.css";

// Importamos los logos/imagenes
import marvelLogo from "../../assets/img/marvel.svg";
import home from "../../assets/img/home_logo.png";
import posteos from "../../assets/img/posteo.svg";
import logout from "../../assets/img/LogOut.png";
import login from "../../assets/img/login.png";
import user from "../../assets/img/user_logo.png";

// Importamos de React Router para manejar los links:
import { NavLink } from "react-router-dom";

// En esta barra de navegación tendremos una serie de botones
// que se mostrarán cuando el usuario esté logeado/autenticado (auth === true)
// y una serie de botones que se mostrarán cuando no lo este

// Utilizamos keys dado que como la navbar deberá renderizar algunos
// elementos y otros no, si queremos que React note la diferencia
// debemos especificar con Key con cada uno de ellos son elementos
// diferentes

const Navbar = (props) => {
    const {auth} = props

    return (
        <header className={styles.navbar}>
            <div className={styles.logoContainer}>
                <NavLink key={1} to="/"><img className={styles.logo} alt="" src={marvelLogo}></img></NavLink>
            </div>
            <div className={styles.buttonContainer}>
                <NavLink to="/"><img className={styles.home} alt="" src={home}></img></NavLink>
                {auth === true? 
                    <>
                        <NavLink key={3} to="/posteos"><img className={styles.posteos} alt="" src={posteos}></img></NavLink>
                        <NavLink key={4} to="/perfil"><img className={styles.user} alt="" src={user}></img></NavLink>
                        <NavLink key={5} to="/logout"><img className={styles.logout} alt="" src={logout}></img></NavLink>
                    </>
                    :
                    <>
                        <NavLink key={2} to="/login"><img className={styles.login} alt="" src={login}></img></NavLink>
                    </>
                }
            </div>
        </header>
    )
}
export default Navbar;
