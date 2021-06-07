import React from 'react'

import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TinderCards from './components/TinderCards';
import SwipeButtons from './components/SwipeButtons';
import ChatList from './components/ChatList';
import Chat from './components/Chat';


function TinderApp() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/chat/:chatID">
                        <Header backButton="/chat" />
                        <Chat />
                    </Route>
                    <Route path="/chat">
                        <Header backButton="/" />
                        <ChatList />
                    </Route>
                    {/* Always have your default route at the end */}
                    <Route path="/">
                        <Header />
                        <TinderCards />
                        <SwipeButtons />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default TinderApp
