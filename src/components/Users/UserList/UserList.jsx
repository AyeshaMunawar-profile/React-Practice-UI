import React from 'react';
import User from "../User/User";
import Card from "../../Containers/Card/Card";
import classes from "./UserList.module.css"

function UserList(props) {
    const {userList} = props
    const getUserComponentsList = () => {
        return userList.map(user => {
            return <User {...user} key={user.id}/>
        })
    }
    const getEmptyUserListMessage = () => {
        return <Card backgroundColor={"#03045E"}>
            <h2 className={classes["user-list__error"]}>No Users in the list</h2>
        </Card>
    }
    return (
        <Card backgroundColor={"#CAF0F8"} className={classes["user-list"]}>
            <div>
                {userList.length > 0 ? <h1>Users List</h1> : ""}
                {userList.length > 0 ? getUserComponentsList() : getEmptyUserListMessage()}
            </div>
        </Card>
    );
}

export default UserList;
