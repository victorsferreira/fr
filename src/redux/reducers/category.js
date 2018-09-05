import {
    GET_PRODUCT_CATEGORY_LIST,
    GET_SERVICE_CATEGORY_LIST,
    GET_PRODUCT_SUBCATEGORY_LIST,
    GET_SERVICE_SUBCATEGORY_LIST
} from '../actions/category';

const defaultState = {
    productCategory: [{id: 1, name: 'produto 1'}, {id: 2, name: 'produto 2'}],
    serviceCategory: [{id: 1, name: 'serviço 1'}, {id: 2, name: 'serviço 2'}],
    productSubcategory: [],
    serviceSubcategory: []
};

const category = (state = defaultState, action) => {
    switch (action.type) {
        case GET_PRODUCT_CATEGORY_LIST: {
            const productCategory = action.payload.data;

            return { ...state, productCategory }
        }

        case GET_PRODUCT_SUBCATEGORY_LIST: {
            const productSubcategory = action.payload.data;

            return { ...state, productSubcategory }
        }

        case GET_SERVICE_CATEGORY_LIST: {
            const serviceCategory = action.payload.data;

            return { ...state, serviceCategory }
        }

        case GET_SERVICE_SUBCATEGORY_LIST: {
            const serviceSubcategory = action.payload.data;

            return { ...state, serviceSubcategory }
        }

        default:
            return state;
    }
};

export default category;