import {
    GET_SERVICE_LIST
} from '../actions/service';

const defaultState = {
    list: [
        {
            id: 'service-1',
            name: 'service 1'
        }
    ]
};

const service = (state = defaultState, action) => {
    switch (action.type) {
        case GET_SERVICE_LIST: {
            const list = action.payload.data;

            return { ...state, list }
        }

        default:
            return state;
    }
};

export default service;