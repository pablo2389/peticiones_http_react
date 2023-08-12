import styles from "./PosteoCard.module.css";

import magnifying_glass_logo from "../../assets/img/magnifying_glass_logo.png"

const PosteoCard = ({comicData}) => {

  const pictures = {
    "Spiderman": "http://i.annihil.us/u/prod/marvel/i/mg/6/c0/59079911f0fdb/standard_xlarge.jpg",
    "X-MEN": "http://i.annihil.us/u/prod/marvel/i/mg/9/d0/58b5cfb6d5239/standard_xlarge.jpg",
    "Capitán América": "http://i.annihil.us/u/prod/marvel/i/mg/2/f0/4bc6670c80007/standard_xlarge.jpg",
    "Thanos": "http://i.annihil.us/u/prod/marvel/i/mg/7/50/626847943eeed/standard_xlarge.jpg",
    "Ant-Man": "http://i.annihil.us/u/prod/marvel/i/mg/f/20/4bc69f33cafc0/standard_xlarge.jpg",
  }

  return (
        <div className={styles.comicCards}>
            <div className={styles.flipBox}>
                <div className={styles.flipBoxInner}>
                    <div className={styles.flipBoxFront}>
                        <img className={styles.picture} src={pictures[comicData.titulo]} alt={comicData.titulo}></img>
                    </div>
                    <div className={styles.flipBoxBack}>
                        <img className={styles.backPicture} src={magnifying_glass_logo} alt={"magnify"}></img>
                    </div>
                </div>
            </div>
            <div className={styles.cardDescription}>
                <h3 className={styles.cardTitle}>{comicData.texto.length > 120 ? comicData.texto.substring(0, 110) + " ..." : comicData.texto}</h3>
            </div>
        </div>
  );
};
export default PosteoCard;
