import React from 'react';
import './App.css';
import MaterialCardHolderContainer from "./component/material-card/MaterialCardHolderContainer";
import Header from "./component/header/Hearder";

function App() {
    return (
        <div>
            <Header/>
            <MaterialCardHolderContainer/>
        </div>
    );
}

export default App;
