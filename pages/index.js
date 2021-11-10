import styles from '../styles/Home.module.css'
import {useState} from "react";
import Collage from "../components/collage";
import data from "../json/data.json"



data = data.map((obj, index) => ({ ...obj, id: index, show: false }))


export default function Home() {

    const [cards, setCards] = useState(data);
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
                <button className={styles.startButton} onClick={() => setStart(true)}>start</button>
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
