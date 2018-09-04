import { post, get } from '../../libs/api';

export const REGISTER = 'REGISTER';

export const register = (type, data) => {
    return (dispatch) => {
        return post(`/account/${type}`, data).exec()
            .then((response) => {
                return dispatch({
                    type: REGISTER
                });
            });
    };
};