import styles from "./Footer.module.css";
import inoveLogo from "../../assets/img/inove_logo.png"
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <a href="https://www.inovecode.com"><img src={inoveLogo}></img></a>
        </footer>
    )
}
export default Footer;