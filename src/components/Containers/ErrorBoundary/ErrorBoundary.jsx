import React, {Component} from 'react';
import Card from "../Card/Card";

class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: false
        }
    }

    componentDidCatch(error, errorInfo) {
        const {setAlertContent, showAlert} = this.props;
        this.setState({error: true})
        console.error("Ooops! Something went wrong", error, errorInfo);
        const alertContent = {
            heading: "Wrong Age",
            message: "Age cannot be greater than 80 years",
            action: "Try again"
        };
        setAlertContent(alertContent);
        showAlert(true)
    }

    render() {
        if (this.state.error) {
            return (<>
                <Card backgroundColor="#ADE8F4">
                    <h2>Ooops Something went wrong</h2>
                </Card>
            </>)
        } else {
            return (<>
                {this.props.children}
            </>)
        }
    }

}

export default ErrorBoundary;
