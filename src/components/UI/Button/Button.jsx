import React from 'react';
import styles from "./Button.module.css"

function Button(props) {
    const {type, onClick, children, className} = props;
    const handleOnClick = (event) => {
        if (event && event.preventDefault) {
            event.preventDefault();
            onClick(event)

        } else {
            console.log("Button action failed", event)
        }
    }
    return (
            <button
                type={type}
                className={`${className ? className : styles.button}`}
                onClick={handleOnClick}>{children}</button>
    );
}

export default Button;
