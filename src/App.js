import './App.css';

import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';    
import SigninSignupPage from './components/signin-signup/signin-signup';



function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/shop' component={ShopPage}/>
                <Route exact path='/signin' component={SigninSignupPage}/>
            </Switch>
        </div>
    );
}

export default App;
