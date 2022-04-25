import React from 'react';
import classes from "./OverlayMessage.module.css"
import Card from "../../Containers/Card/Card";
import Button from "../Button/Button";

function OverlayMessage(props) {
    const {heading, message, buttonText, onClickHandler} = props;

    return (
        <div className={classes["overlay-message"]}>
            <Card className={classes["overlay-message__content"]} backgroundColor={"#eee"}>
                <h1>{heading}</h1>
                <h2>{message}</h2>
                <Button onClick={onClickHandler} type={"button"}>{buttonText}</Button>
            </Card>
            <div className={classes["overlay-message__background"]}/>
        </div>
    );
}

export default OverlayMessage;
