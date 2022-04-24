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
        this.setState({error: true})
        console.error("Ooops! Something went wrong", error, errorInfo)
    }

    render() {
        if (this.state.error) {
            return (<>
                <Card backgroundColor="#ADE8F4">
                    <h2>Ooops Something went wrong</h2>
                </Card>
            </>)
        } else {
            return (<div>
                {this.props.children}
            </div>)
        }
    }

}

export default ErrorBoundary;
