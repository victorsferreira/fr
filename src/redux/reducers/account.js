import { MY_PROFILE } from '../actions/account';

const defaultState = {
    myProfile: {}
};

const account = (state = defaultState, action) => {
    switch (action.type) {
        case MY_PROFILE: {
            const { myProfile } = action.payload;
            return { ...state, myProfile }
        }

        default:
            return state;
    }
};

export default account;