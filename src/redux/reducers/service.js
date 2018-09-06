import {
    GET_SERVICE_LIST
} from '../actions/service';

const defaultState = {
    list: [
        {
            id: 'service-1',
            name: 'service 1'
        }
    ],
    self: [
        {
            id: 'Meu serviço-1',
            name: 'Meu serviço 1'
        },
        {
            id: 'Meu serviço-2',
            name: 'Meu serviço 2'
        }
    ],
    cache: {}
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