import styles from "../styles/Styles.module.css";
import {useEffect} from "react";
import Card from "./card";


export default function Collage ({cards, action}) {

    useEffect(() => {
        const gridElement = document.querySelector("#grid");
        gridElement.style["grid-template-columns"] = `repeat(3, 1fr)`;
        gridElement.style["grid-template-rows"] = `repeat(6, 1fr)`;
    }, []);


    return (
        <div id="grid" className={styles.grid}>

            {cards.map((card, index) => {
                return (
                    <Card
                        key={index}
                        card={card}
                        action={action}
                    />
                )
            })}

        </div>
    )

}