import {
    GET_PRODUCT_LIST
} from '../actions/product';

const defaultState = {
    list: [
        {
            id: 'product-1',
            name: 'Product 1'
        }
    ]
};

const product = (state = defaultState, action) => {
    switch (action.type) {
        case GET_PRODUCT_LIST: {
            const list = action.payload.data;

            return { ...state, list }
        }

        default:
            return state;
    }
};

export default product;