import React, { useEffect } from 'react'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Checkout from './components/Checkout';
import { useStateValue } from './context/StateProvider';
import { auth } from './firebase';


function AmazonApp() {
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                // the user is logged in
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                });
            } else {
                // the user is logged out
                dispatch({
                    type: 'SET_USER',
                    user: null
                });
            }
        })
        return () => {
            // cleanup
            unsubscribe();
        }
    }, [dispatch])

    return (
        <Router>
            <div className="app">
                {/* <h2>Amazon Clone 🚀</h2> */}
                <Switch>
                    <Route exact path="/"> <Home /> </Route>
                    <Route path="/login"> <Login /> </Route>
                    <Route path="/checkout"> <Checkout /> </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default AmazonApp
