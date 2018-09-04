import { REGISTER } from '../actions/account';

const defaultState = {
    
};

const account = (state = defaultState, action) => {
    switch (action.type) {
        case REGISTER: {
            return { ...state }
        }

        default:
            return state;
    }
};

export default account;