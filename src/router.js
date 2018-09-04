import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/account/Login';
import ForgotPassword from './pages/account/ForgotPassword';
import CreateAccount from './pages/account/CreateAccount';
import ResetPassword from './pages/account/ResetPassword';
import Master from './pages/Master';

const routes = [
    { component: Login, path: '/login' },
    { component: ForgotPassword, path: '/forgot-password' },
    { component: CreateAccount, path: '/account/create/:type' },
    { component: Home, path: '/home' },
    { component: ResetPassword, path: '/reset-password/:token'}
];

const Router = () => (
    <HashRouter>
        <Master>
            <Switch>
                {
                    routes.map((route, i) => {
                        return (
                            <Route key={i} component={route.component} path={route.path} />
                        );
                    })
                }
            </Switch>
        </Master>
    </HashRouter>
);

{/* <Switch>
            {
                routes.map((route) => {
                    const Component = route.component;
                    return (
                        <Route key={i} path={route.path} exact render={(props) => {
                            return (
                                <Master protected={route.protected} {...props}>
                                    <Component {...props} {...route.props} />
                                </Master>
                            )
                        }} />
                    );
                })
            }
        </Switch> */}

export default Router;