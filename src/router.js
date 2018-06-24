import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import App from './pages/App';
import About from './pages/About';

const Router = () => (
    <BrowserRouter>
        <div>
            <Route path="/" exact component={App} />
            <Route path="/about" exact component={About} />
        </div>
    </BrowserRouter>);

export default Router;