import {useState} from "react";
import {cardData, buttonText} from "../public/json/data.json";
import styles from "../styles/Styles.module.css";
import Collage from "../components/collage";


export default function Home() {

    let cardInfo = cardData.map((obj, index) => ({...obj, id: index, show: false}))

    const [cards, setCards] = useState(cardInfo);
    const [start, setStart] = useState(false);

    const reveal = (id) => {
        let cardsCopy = [...cards];
        let updatedCard = {...cardsCopy[id]};
        updatedCard.show = !updatedCard.show;
        cardsCopy[id] = updatedCard;
        setCards(cardsCopy);
    }

    return (
        <div className={styles.container}>

            <main className={styles.main + " " + (start ? styles.hide : styles.display)}>
                <button className={styles.startButton} onClick={() => setStart(true)}>{ buttonText }</button>
            </main>

            <main className={styles.main + " " + (start ? styles.display : styles.hide)}>
                <Collage
                    cards={cards}
                    action={reveal}
                />
            </main>

        </div>
    )
}
