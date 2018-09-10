import React from 'react';
import ReactDOM from 'react-dom';
import ls from 'local-storage';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';

import store from './redux/store';
import Router from './router';

try{
    ls('session');
}catch(e){
    ls('session', "{}");
}

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>
    , document.getElementById('app'));
registerServiceWorker();
