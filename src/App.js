import React, {useState} from 'react';
import ErrorBoundary from "./components/Containers/ErrorBoundary/ErrorBoundary";
import UserForm from "./components/Users/UserForm/UserForm";
import UserList from "./components/Users/UserList/UserList";
import OverlayMessage from "./components/UI/OverlayMessage/OverlayMessage";

function App() {
    const [usersList, setUsersList] = useState([]);
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const [overlayContent, setOverlayContent] = useState({heading: "", message: "", action: ""})
    const {heading, message, action} = overlayContent;
    const handleNewUserAdded = (userInfo) => {
        setUsersList((previousList) => ([...previousList, userInfo]))
    }
    const hideOverlay = () => {
        setIsOverlayVisible(false)
    }
    const showOverlay = () => {
        setIsOverlayVisible(true)
    }
    const setOverlayMessageContent = ({heading, message, action}) => {
        setOverlayContent({heading, message, action})
    }
    return (
        <div className="app">
            <ErrorBoundary showAlert={showOverlay}
                           setAlertContent={setOverlayMessageContent}>
                <UserForm onNewUserAdded={handleNewUserAdded} showAlert={showOverlay}
                          setAlertContent={setOverlayMessageContent}/>
                <UserList userList={usersList}/>
                {isOverlayVisible ? <OverlayMessage heading={heading} message={message} buttonText={action}
                                                    onClickHandler={hideOverlay}/>
                    : ""}
            </ErrorBoundary>
        </div>
    );
}

export default App;
