import { LOGOUT } from '../actions/session';

const defaultState = {
    token: null
};

const session = (state = defaultState, action) => {
    switch (action.type) {
        case LOGOUT: {
            return { ...state, token: null }
        }

        default:
            return state;
    }
};

export default session;