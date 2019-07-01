import React, {Component} from 'react';
import './App.css';
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "./reducer";
import LoginContainer from "./LoginContainer";

const store = createStore(rootReducer);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="app">
                    <LoginContainer/>
                </div>
            </Provider>
        );
    }
}

export default App;
