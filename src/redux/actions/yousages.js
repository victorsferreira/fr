import { post, get } from '../../libs/api';

export const ADD_ITEM = 'ADD_ITEM';
export const RECEIVE_PING_RESPONSE = 'RECEIVE_PING_RESPONSE';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const addItem = (amount) => {
    return {
        type: ADD_ITEM,
        payload: {
            amount
        }
    };
};

export const logout = () => {
    return {
        type: LOGOUT
    };
};

export const login = () => {
    return (dispatch) => {
        post('/account/login')
            .then((response) => {
                return dispatch({
                    type: LOGIN,
                    payload: {
                        token: response.data
                    }
                });
            });
    }
};

export const pingProtected = (token) => {
    const headers = {};
    headers['Authorization'] = `Bearer ${token}`;
    return (dispatch) => {
        get('/account/protected', { headers })
            .then((response) => {
                return dispatch({
                    type: RECEIVE_PING_RESPONSE,
                    payload: {
                        now: response.data.now
                    }
                });
            })
            .catch(() => {
                alert('Não foi possível acessar essa rota');
            });
    }
};

export const pingOpen = () => {
    return (dispatch) => {
        get('/account/open')
            .then((response) => {
                return dispatch({
                    type: RECEIVE_PING_RESPONSE,
                    payload: {
                        now: response.data.now
                    }
                });
            });
    }
};