import styles from '../styles/Home.module.css'
import {useState} from "react";


const data = [
    {
        id: 0,
        show: false,
        img: 'bills.jpg',
        text: 'Buffalo Bills'
    },
    {
        id: 1,
        show: false,
        img: 'piano.jpg',
        text: 'Piano'
    },
    {
        id: 2,
        show: false,
        img: 'fiorentina.jpg',
        text: 'Fiorentina'
    },
    {
        id: 3,
        show: false,
        img: 'paradiso.png',
        text: 'Cinema Paradiso'
    },
    {
        id: 4,
        show: false,
        img: 'hema.jpg',
        text: 'H.E.M.A.'
    },
    {
        id: 5,
        show: false,
        img: 'spa.jpg',
        text: 'F1'
    },
    {
        id: 6,
        show: false,
        img: 'lion.jpg',
        text: 'It\'s a Fake!'
    },
    {
        id: 7,
        show: false,
        img: 'fight-club.png',
        text: 'Fight Club'
    },
    {
        id: 8,
        show: false,
        img: 'liverpool.jpg',
        text: 'Liverpool'
    },
    {
        id: 9,
        show: false,
        img: 'disney.jpg',
        text: 'Disney'
    },
    {
        id: 10,
        show: false,
        img: 'angels.jpg',
        text: 'Angels with Dirty Faces'
    },
    {
        id: 11,
        show: false,
        img: 'family.jpg',
        text: 'My Family'
    },
    {
        id: 12,
        show: false,
        img: 'ds9.jpg',
        text: 'Star Trek'
    },
    {
        id: 13,
        show: false,
        img: 'robot.jpg',
        text: 'Mr. Robot'
    },
    {
        id: 14,
        show: false,
        img: 'belle.jpg',
        text: 'Belle'
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
