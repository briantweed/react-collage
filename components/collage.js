import styles from "../styles/Home.module.css";
import {useEffect} from "react";



export default function Collage ({cards, action}) {

    const placeHolderImage = "https://via.placeholder.com/400x300.png?text=SimplyIOA";

    useEffect(() => {
        const gridElement = document.querySelector("#grid");
        gridElement.style["grid-template-columns"] = `repeat(${cards.length / 3}, 1fr)`;
    }, []);


    return (
        <div id="grid" className={styles.grid}>

            {cards.map(card => {

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
                                <div className={styles.id}>{ card.id + 1 }</div>
                                <img src={image} alt={alt}/>
                            </div>

                            <div className={styles.flipCardBack}>
                                <p>{ card.text }</p>
                            </div>

                        </div>
                    </div>
                )
            })}

        </div>
    )

}