import React, {useState} from 'react';
import ErrorBoundary from "./components/Containers/ErrorBoundary/ErrorBoundary";
import UserForm from "./components/Users/UserForm/UserForm";
import UserList from "./components/Users/UserList/UserList";

function App() {
    const [usersList, setUsersList] = useState([]);
    const handleNewUserAdded = (userInfo) => {
        setUsersList((previousList) => ([...previousList, userInfo]))
    }
    return (
        <div className="app">
            <ErrorBoundary>
                <UserForm onNewUserAdded={handleNewUserAdded}/>
                <UserList userList={usersList}/>
            </ErrorBoundary>
        </div>
    );
}

export default App;
