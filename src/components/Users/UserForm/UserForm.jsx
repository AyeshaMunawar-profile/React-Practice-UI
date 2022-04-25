import React, {useState} from 'react';
import Button from "../../UI/Button/Button";
import classes from "./UserForm.module.css"
import Card from "../../Containers/Card/Card";

function UserForm(props) {
    const {onNewUserAdded, setAlertContent, showAlert} = props;
    const [state, setState] = useState({userName: "", age: 0, id: 0})
    const handleOnChange = (event) => {
        let {value, name} = event.target;
        if (name === 'age') {
            value = Number(value).toString()
        }
        setState((previousState) => ({...previousState, [name]: value}))
    }
    const handleOnUserAdded = (event) => {
        if (event && event.preventDefault) {
            event.preventDefault();
            const currentAge = state.age;
            const currentUserName = state.userName.trim();
            if ((currentUserName.length > 0) && (currentAge >= 18 && currentAge <= 80)) {
                state.id = "user-" + Math.random().toString()
                onNewUserAdded(state)
                setState({userName: "", age: 0, id: 0})
            } else {
                if (currentAge < 18) {
                    const alertContent = {
                        heading: "Wrong Age",
                        message: "Age cannot be less than 18 years",
                        action: "Try again"
                    };
                    setAlertContent(alertContent);
                    showAlert(true)
                    console.log("Age must be greater than or equal to 18")
                } else if (currentAge > 80) {
                    const alertContent = {
                        heading: "Wrong Age",
                        message: "Age cannot be greater than 80 years",
                        action: "Try again"
                    };
                    setAlertContent(alertContent);
                    showAlert(true)
                    console.log("Age must be less than or equal to 80")
                } else if (currentUserName.length === 0) {
                    const alertContent = {
                        heading: "Invalid User Name",
                        message: "User Name cannot be empty",
                        action: "Try again"
                    };
                    setAlertContent(alertContent);
                    showAlert(true)
                    console.log("Invalid UserName")
                } else {
                    const alertContent = {
                        heading: "Oops!",
                        message: "Something went wrong",
                        action: "Try again"
                    };
                    setAlertContent(alertContent);
                    showAlert(true)

                    console.log("Failed Submission!  Input validation failed")
                }
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
                    <Button type={"submit"} onClick={handleOnUserAdded} className="btn-blue">Add User</Button>
                </form>
            </div>
        </Card>
    );
}

export default UserForm;
