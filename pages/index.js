import styles from '../styles/Home.module.css'
import {useState} from "react";


const data = [
    {
        id: 0,
        show: false,
        img: '',
        text: ''
    },
    {
        id: 1,
        show: false,
        img: '',
        text: ''
    },
    {
        id: 2,
        show: false,
        img: '',
        text: ''
    },
    {
        id: 3,
        show: false,
        img: '',
        text: ''
    },
    {
        id: 4,
        show: false,
        img: '',
        text: ''
    },
    {
        id: 5,
        show: false,
        img: '',
        text: ''
    },
    {
        id: 6,
        show: false,
        img: '',
        text: ''
    },
    {
        id: 7,
        show: false,
        img: '',
        text: ''
    },
    {
        id: 8,
        show: false,
        img: '',
        text: ''
    },
    {
        id: 9,
        show: false,
        img: '',
        text: ''
    },
    {
        id: 10,
        show: false,
        img: '',
        text: ''
    },
    {
        id: 11,
        show: false,
        img: '',
        text: ''
    },
    {
        id: 12,
        show: false,
        img: '',
        text: ''
    },
    {
        id: 13,
        show: false,
        img: '',
        text: ''
    },
    {
        id: 14,
        show: false,
        img: '',
        text: ''
    },
]

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

            <main className={styles.main + " " + (start ? styles.display : styles.hide)}>
                <div className={styles.grid}>

                    {cards.map(card => {
                        return (
                            <div key={card.id}
                                 className={styles.flipCard + " " + (card.show ? styles.show : "")}
                                 onClick={() => reveal(card.id)}
                            >
                                <div className={styles.flipCardInner}>
                                    <div className={styles.flipCardFront}>
                                        <div className={styles.id}>{card.id + 1}</div>
                                        <img src={"images/" + card.img} alt={'image'}/>
                                    </div>
                                    <div className={styles.flipCardBack}>
                                        <p>{card.text}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </main>

            <main className={styles.main + " " + (start ? styles.hide : styles.display)}>
                <button className={styles.startButton} onClick={() => setStart(true)}>start</button>
            </main>

        </div>
    )
}
