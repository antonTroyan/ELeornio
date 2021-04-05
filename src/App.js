import React from 'react';
import './App.css';
import MaterialCardHolderContainer from "./component/material-card/MaterialCardHolderContainer";
import Header from "./component/header/Hearder";
import {Route, Switch} from 'react-router-dom';
import TranslateGame from "./component/translate-game/TranslateGame";

function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route path='/game/:materialId?'
                       render={() => <TranslateGame/>}/>
                <Route path='/'
                       render={() => <MaterialCardHolderContainer/>}/>
            </Switch>
        </div>
    );
}

export default App;
