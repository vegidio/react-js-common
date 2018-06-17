import "./styles/App.css";

import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Container, Header, Menu } from "semantic-ui-react";

class App extends Component
{
    constructor(props)
    {
        super(props);
        this.menu = React.createRef();
    }

    _onMenuClick(e, menuItem)
    {
        console.log(menuItem);
        console.log(this.menu);
    }

    render()
    {
        return (
            <Container style={{ marginTop: "3em" }}>
                <Header as='h1'>React JS Common</Header>

                <Menu ref={this.menu} pointing>
                    <Menu.Item name="Home" onClick={this._onMenuClick} />
                    <Menu.Item name="REST Countries" onClick={this._onMenuClick} />
                </Menu>
            </Container>
        );
    }
}

export default App;