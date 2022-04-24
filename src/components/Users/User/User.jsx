import React from 'react';
import Card from "../../Containers/Card/Card";
import classes from "./User.module.css"

function User(props) {
    const {userName, age} = props;
    return (
        <Card backgroundColor={"#F7F4F3"} className={classes.user}>
            <div className={classes.user}>
                <h1 className={classes["main-heading"]}>User Name : {userName}</h1>
                <h2 className={classes["secondary-heading"]}>Age : {age}</h2>
            </div>
        </Card>
    );
}

export default User;
