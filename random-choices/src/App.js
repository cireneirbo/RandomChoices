import React, { Component } from 'react';
import { Home } from "./components/Home";
import './App.css';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <div className="App">
                <header className="App-header">
                </header>
                    <Home />
                <footer className="App-footer">
                </footer>
            </div>
        );
    }
}
