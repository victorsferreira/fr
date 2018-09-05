import {
    GET_ACTIVITY_LIST
} from '../actions/activity';

const defaultState = {
    list: [{id: 1, name: 'atividade 1'}, {id: 2, name: 'atividade 2'}]
};

const activity = (state = defaultState, action) => {
    switch (action.type) {
        case GET_ACTIVITY_LIST: {
            const list = action.payload.data;

            return { ...state, list }
        }

        default:
            return state;
    }
};

export default activity;