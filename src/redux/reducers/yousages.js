import { ADD_ITEM, RECEIVE_PING_RESPONSE, LOGIN, LOGOUT } from '../actions/yousages';

const defaultState = {
    total: 0,
    now: 0,
    token: ''
};

const yousages = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return { ...state, total: state.total + action.payload.amount };
        case RECEIVE_PING_RESPONSE:
            return { ...state, now: action.payload.now }
        case LOGIN:
            return { ...state, token: action.payload.token }
        case LOGOUT:
            return { ...state, token: '' }
        default:
            return state;
    }
};

export default yousages;