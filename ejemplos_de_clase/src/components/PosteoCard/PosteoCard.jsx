import styles from "./PosteoCard.module.css";

import inoveLogo from "../../assets/img/inove_logo.png"
import magnifying_glass_logo from "../../assets/img/magnifying_glass_logo.png"

const PosteoCard = ({posteoData}) => {

  const pictures = {
    "Spiderman": "http://i.annihil.us/u/prod/marvel/i/mg/6/c0/59079911f0fdb/standard_xlarge.jpg",
    "X-MEN": "http://i.annihil.us/u/prod/marvel/i/mg/9/d0/58b5cfb6d5239/standard_xlarge.jpg",
    "Capitán América": "http://i.annihil.us/u/prod/marvel/i/mg/2/f0/4bc6670c80007/standard_xlarge.jpg",
    "Thanos": "http://i.annihil.us/u/prod/marvel/i/mg/7/50/626847943eeed/standard_xlarge.jpg",
    "Ant-Man": "http://i.annihil.us/u/prod/marvel/i/mg/f/20/4bc69f33cafc0/standard_xlarge.jpg",
  }

  const elegirImagen = (titulo) => {
    if(titulo in pictures) {
      return pictures[titulo];
    } else {
      return inoveLogo;
    }
  } 

  return (
        <div className={styles.posteoCards}>
            <div className={styles.flipBox}>
                <div className={styles.flipBoxInner}>
                    <div className={styles.flipBoxFront}>
                        <img className={styles.picture} src={elegirImagen(posteoData.titulo)} alt={posteoData.titulo}></img>
                    </div>
                    <div className={styles.flipBoxBack}>
                        <img className={styles.backPicture} src={magnifying_glass_logo} alt={"magnify"}></img>
                    </div>
                </div>
            </div>
            <div className={styles.cardDescription}>
                <h3 className={styles.cardTitle}>{posteoData.texto.length > 120 ? posteoData.texto.substring(0, 110) + " ..." : posteoData.texto}</h3>
            </div>
        </div>
  );
};
export default PosteoCard;
