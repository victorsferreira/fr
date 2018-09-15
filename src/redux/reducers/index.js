import { combineReducers } from 'redux';
import session from './session';
import category from './category';
import activity from './activity';
import product from './product';
import service from './service';
import account from './account';
import notification from './notification';

export default combineReducers({
    session,
    category,
    activity,
    product,
    service,
    account,
    notification
});