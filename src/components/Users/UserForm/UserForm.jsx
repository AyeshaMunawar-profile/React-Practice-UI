import React, {useState} from 'react';
import Button from "../../UI/Button/Button";
import classes from "./UserForm.module.css"
import Card from "../../Containers/Card/Card";

function UserForm(props) {
    const {onNewUserAdded}= props;
    const [state, setState] = useState({userName: "", age: 0, id:0})
    const handleOnChange = (event) => {
        const {value, name} = event.target;
        setState((previousState) => ({...previousState, [name]: value}))
    }
    const handleOnUserAdded = (event) => {
        if (event && event.preventDefault) {
            event.preventDefault();
            if ((state.userName.length > 0) && (state.age>=18 && state.age<=80)) {
                state.id= Math.random().toString()
                onNewUserAdded(state)
                setState({userName: "", age: 0, id:0})
            } else {
                console.log("Failed Submission!  Input validation failed")
            }
        } else {
            console.log("Add user event failed")
            return null;
        }

    }
    return (
        <Card backgroundColor={"#CAF0F8"} className={`user-form ${classes.input}`}>
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor={"username"}>User Name</label>
                        <input name={"userName"}
                               id={"username"}
                               type={"text"}
                               value={state.userName ? state.userName : ""}
                               placeholder="Enter username"
                               onChange={handleOnChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor={"age"}>Age</label>
                        <input name={"age"}
                               id={"age"}
                               type={"number"}
                               min={0}
                               max={80}
                               value={state.age ? state.age : 0}
                               placeholder="Enter your age"
                               onChange={handleOnChange}/>
                    </div>
                    <Button type={"submit"} onClick={handleOnUserAdded}>Add User</Button>
                </form>
            </div>
        </Card>
    );
}

export default UserForm;
