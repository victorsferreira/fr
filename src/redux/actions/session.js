import { post, get } from '../../libs/api';

export const LOGOUT = 'LOGOUT';
export const RESET_PASSWORD = 'RESET_PASSWORD';
export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const CREATE_SESSION = 'CREATE_SESSION';
export const LOAD_SESSION = 'LOAD_SESSION';
export const UPDATE_SESSION = 'UPDATE_SESSION';

export const loadSession = () => {
    return {
        type: LOAD_SESSION
    };
};

export const logout = () => {
    return (dispatch) => {
        return get('/account/logout').exec()
            .then((response) => {
                return dispatch({
                    type: LOGOUT
                });
            })
            .catch((error) => {
                return dispatch({
                    type: LOGOUT
                });
            });
    };
};

export const login = (username, password) => {
    return (dispatch) => {
        return post('/account/login', { username, password }).exec()
            .then((response) => {
                return dispatch({
                    type: CREATE_SESSION,
                    payload: {
                        token: response.headers['x-access-token'],
                        account: response.data
                    }
                });
            });
    };
};

export const forgotPassword = (email) => {
    return (dispatch) => {
        return post('/account/forgot-password', { email }).exec()
            .then((response) => {
                return dispatch({
                    type: FORGOT_PASSWORD,
                    payload: {
                        email
                    }
                });
            });
    }
};

export const resetPassword = (resetPassword, token) => {
    return (dispatch) => {
        return post('/account/reset-password', { resetPassword, token }).exec()
            .then((response) => {
                return dispatch({
                    type: RESET_PASSWORD,
                    payload: {
                        resetPassword, token
                    }
                });
            })
            .catch((err) => { });
    }
};