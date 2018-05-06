import "./styles/App.css";

import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header, Container } from "semantic-ui-react";

class App extends Component {
    render() {
        return (
            <Container style={{ marginTop: "3em" }}>

                <Header as='h1'>Theming Examples</Header>
                <Header as='h1'>Buceta</Header>

            </Container>
        );
    }
}

export default App;
