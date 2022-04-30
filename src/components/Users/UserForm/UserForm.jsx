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
            let errorHeading = "Oops!";
            let errorMessage = "Something went wrong";
            let errorAction = " Try Again"
            event.preventDefault();
            const currentAge = state.age;
            const currentUserName = state.userName.trim();
            if ((currentUserName.length > 0) && (currentAge >= 18 && currentAge <= 80)) {
                state.id = "user-" + Math.random().toString()
                onNewUserAdded(state)
                setState({userName: "", age: 0, id: 0})
            } else {
                if (currentAge < 18) {
                    errorHeading = "Wrong age";
                    errorMessage = "Age cannot be less than 18 years";
                    console.log("Age must be greater than or equal to 18")
                } else if (currentAge > 80) {
                    errorHeading = "Wrong Age";
                    errorMessage = "Age must be less than or equal to 80";
                    console.log("Age must be less than or equal to 80")
                }
                if (currentUserName.length === 0) {
                    errorHeading = `${
                            errorHeading
                        }`
                        + ` \n Invalid User Name`;
                    errorMessage = `${
                            errorMessage
                        }`
                        + `\n User Name cannot be empty`;
                    console.log("Invalid UserName - User Name cannot be empty")
                }
                const alertContent = {
                    heading: errorHeading,
                    message: errorMessage,
                    action: errorAction
                };
                setAlertContent(alertContent);
                showAlert(true);
                console.log("Failed Submission!  Input validation failed")
            }
        } else {
            console.log("Add user event failed")
            return null;
        }

    }
    return (
        <Card backgroundColor={"#CAF0F8"} className={`user-form ${classes.input}`}>
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
        </Card>
    );
}

export default UserForm;
