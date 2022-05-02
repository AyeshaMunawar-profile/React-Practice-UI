import React, {useRef} from 'react';
import Button from "../../UI/Button/Button";
import classes from "./UserForm.module.css"
import Card from "../../Containers/Card/Card";

function UserForm(props) {
    const enteredName = useRef();
    const enteredAge = useRef();
    const {onNewUserAdded, setAlertContent, showAlert} = props;

    const handleOnUserAdded = (event) => {
        if (event && event.preventDefault) {
            event.preventDefault();
            const name = enteredName.current.value.toString().trim();
            const age = Number(enteredAge.current.value).toString();
            console.log(name, age)
            let errorHeading = "Oops!";
            let errorMessage = "Something went wrong";
            let errorAction = " Try Again"
            if ((name.length > 0) && (age >= 18 && age <= 80)) {
                onNewUserAdded({userName: name, age, id: "user-" + Math.random().toString()});
                enteredName.current.value = ""
                enteredAge.current.value = ""
            } else {
                if(age === "0"){
                    errorHeading = "Invalid Age";
                    errorMessage = "Age cannot be empty";
                    console.log("Age cannot be 0 or undefined")
                }
                else if (age < 18) {
                    errorHeading = "Wrong age";
                    errorMessage = "Age cannot be less than 18 years";
                    console.log("Age must be greater than or equal to 18")
                } else if (age > 80) {
                    errorHeading = "Wrong Age";
                    errorMessage = "Age must be less than or equal to 80";
                    console.log("Age must be less than or equal to 80")
                }
                if (name.length === 0) {
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
                           placeholder="Enter username"
                           ref={enteredName}/>
                </div>
                <div className="form-group">
                    <label htmlFor={"age"}>Age</label>
                    <input name={"age"}
                           id={"age"}
                           type={"number"}
                           min={0}
                           max={80}
                           placeholder="Enter your age"
                           ref={enteredAge}/>
                </div>
                <Button type={"submit"} onClick={handleOnUserAdded} className="btn-blue">Add User</Button>
            </form>
        </Card>
    );
}

export default UserForm;
