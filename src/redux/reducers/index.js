import { combineReducers } from 'redux';
import session from './session';
import category from './category';
import activity from './activity';

export default combineReducers({
    session,
    category,
    activity
});