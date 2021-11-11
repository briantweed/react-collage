import styles from "../styles/Styles.module.css";

export default function Card({card, action}) {

    return (
        <div
            key={card.id}
            className={styles.flipCard + " " + (card.show ? styles.show : "")}
        >
            <div className={styles.flipCardInner}>

                <div className={styles.flipCardFront} onClick={() => action(card.id)}>
                    <p>{ card.question }</p>
                </div>

                <div className={styles.flipCardBack}>
                    <p>{ card.answer }</p>
                </div>

            </div>
        </div>
    )

}