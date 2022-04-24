import React from 'react';
import styles from "./Card.module.css"

function Card(props) {
    return (
        <div className={`${props.className} ${styles.card}`}
             style={{backgroundColor: props.backgroundColor ? props.backgroundColor : "transparent"}}>
            {props.children}
        </div>
    );
}

export default Card;
