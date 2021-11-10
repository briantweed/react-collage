import {placeHolderImage} from "../public/json/data.json";
import styles from "../styles/Styles.module.css";


export default function Card({card, action}) {

    const image = card.img ? "images/" + card.img : placeHolderImage;
    const alt = card.text ? card.text : 'image';

    return (
        <div
            key={card.id}
            className={styles.flipCard + " " + (card.show ? styles.show : "")}
            onClick={() => action(card.id)}
        >
            <div className={styles.flipCardInner}>

                <div className={styles.flipCardFront}>
                    <div className={styles.id}>{card.id + 1}</div>
                    <img src={image} alt={alt}/>
                </div>

                <div className={styles.flipCardBack}>
                    <p>{card.text}</p>
                </div>

            </div>
        </div>
    )

}