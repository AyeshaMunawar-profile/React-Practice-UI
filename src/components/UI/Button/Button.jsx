import React from 'react';
import styles from "./Button.module.css"

function Button(props) {
    const {type, onClick, children} = props;
    const handleOnClick = (event) => {
        if (event && event.preventDefault) {
            event.preventDefault();
            onClick(event)

        } else {
            console.log("Button action failed", event)
        }
    }
    return (
        <div>
            <button type={type} className={styles.button} onClick={handleOnClick}>{children}</button>
        </div>
    );
}

export default Button;
