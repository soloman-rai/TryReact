import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import './ClubhouseApp.css';
import Welcome from './pages/Welcome';
import PlanLayout from './layouts/PlanLayout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PhoneConfirm from './pages/PhoneConfirm';
import CodeConfirm from './pages/CodeConfirm';
import AllowNotification from './pages/AllowNotification';
import AppLayout from './layouts/AppLayout';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import GetUsername from './pages/GetUsername';


function ClubhouseApp() {
    return (
        <Router>
            <Route exact path={[
                '/',
                '/invite',
                '/get_username',
                '/code_confirm',
                '/allow_notifications'
            ]}>
                <PlanLayout>
                    <Switch>
                        <Route exact path="/" component={Welcome} />
                        <Route exact path="/get_username" component={GetUsername} />
                        <Route exact path="/invite" component={PhoneConfirm} />
                        <Route exact path="/code_confirm" component={CodeConfirm} />
                        <Route exact path="/allow_notifications" component={AllowNotification} />
                    </Switch>   
                </PlanLayout>
            </Route>
            <Route exact path={['/home', '/explore', '/profile']}>
                <AppLayout>
                    <Switch>
                        <Route exact path='/home' component={Home}></Route>
                        <Route exact path='/explore' component={Explore}></Route>
                        <Route exact path='/profile' component={Profile}></Route>
                    </Switch>
                </AppLayout>
            </Route>
        </Router>
    )
}

export default ClubhouseApp

