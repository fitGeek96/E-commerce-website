import './App.css';
import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage';

import ShopPage from './pages/shop/shop';

const HatsPage = () => (
    <div>
        <h1>HATS PAGE</h1>
    </div>
)

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/shop' component={ShopPage}/>
            </Switch>
        </div>
    );
}

export default App;
