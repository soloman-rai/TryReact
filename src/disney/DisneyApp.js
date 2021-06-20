import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';
import Login from './components/Login';


function DisneyApp() {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route path='/movie/:movieID'>
                        <MovieDetail />
                    </Route>
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <Route path=''>
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default DisneyApp
