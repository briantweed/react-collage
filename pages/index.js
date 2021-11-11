import {useState} from "react";
import {data} from "../public/data.js";
import styles from "../styles/Styles.module.css";
import Collage from "../components/collage";
import {atob} from "next/dist/server/web/sandbox/polyfills";


export default function Home() {

    let {cardData} = JSON.parse(atob(data));

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
                <button className={styles.startButton} onClick={() => setStart(true)}>{ 'start' }</button>
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
