import './App.css';

import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import CheckoutPage from './pages/checkout/checkout';
import Collection from './pages/collection/collection';
import SigninSignupPage from './components/signin-signup/signin-signup';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selector';

class App extends Component {

    unsubscribeFromAuth = null

    componentDidMount() {
        const {setCurrentUser} = this.props

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    });
                });
            } else {
                setCurrentUser(userAuth);
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/shop' component={ShopPage}/>
                    <Route exact path='/checkout' component={CheckoutPage}/>
                    <Route
                        exact
                        path='/signin'
                        render={() => this.props.currentUser
                        ? (<Redirect to='/'/>)
                        : (<SigninSignupPage/>)}/>
                    <Route path='/shop/:collectionId' component={Collection}/>
                </Switch>
            </div>
        )
    };
}

const mapStateToProps = createStructuredSelector({currentUser: selectCurrentUser});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
