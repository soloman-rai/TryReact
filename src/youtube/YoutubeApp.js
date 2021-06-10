import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RecommendedVideos from './components/RecommendedVideos';
import SearchResults from './components/SearchResults';

import './assets/YoutubeApp.css';

function YoutubeApp() {
    return (
        <div className="app">
            <Router>
                <Header />
                <Switch>
                    <Route path="/search/:searchTerm">
                        <div className="app_page">
                            <Sidebar />
                            <SearchResults />
                        </div>
                    </Route>
                    <Route path="/">
                        <div className="app_page">
                            <Sidebar />
                            <RecommendedVideos />
                        </div>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default YoutubeApp
