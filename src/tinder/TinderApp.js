import React, { useEffect } from 'react';

import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ChatList from './components/ChatList';
import Chat from './components/Chat';
import Home from './components/Home';
import { useStateValue } from './context/StateProvider';
import AuthForm from './components/AuthForm';
import './assets/TinderApp.css';
import { db, auth } from './firebase';
import Profile from './components/Profile';


function TinderApp() {
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                // console.log(authUser.uid);
                // the user is logged in
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                });
                // db.collection('userDetails').doc(authUser.uid).get().then(snapshot => console.log(snapshot.data()));
                db.collection("userDetails").where("id", "==", authUser.uid)
                    .get()
                    .then(function(querySnapshot) {
                        querySnapshot.forEach(function(doc) {
                            dispatch({
                                type: 'SET_USER_DETAILS',
                                userDetails: { id: doc.id, data: doc.data() }
                            });
                        });
                    })
                    .catch(function(error) {
                        console.log("Error getting user detail: ", error);
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
                    <Route path="/profile">
                        <Header backButton="/" />
                        <Profile />
                    </Route>
                    {/* Always have your default route at the end */}
                    <Route path="/">
                        {user ? 
                            <Home />
                            : 
                            <>
                                <Header />
                                <AuthForm />
                            </>
                        }
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default TinderApp
