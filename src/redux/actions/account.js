import { put, post, get, createFormData } from '../../libs/api';
import { CREATE_SESSION } from './session';

export const MY_PROFILE = 'MY_PROFILE';
export const EDIT_ACCOUNT = 'EDIT_ACCOUNT';
export const GET_NOTIFICATIONS = 'GET_NOTIFICATIONS';

export const register = (type, data) => {
    const formData = createFormData(data);
    return (dispatch) => {
        return post(`/account/${type}`, formData).exec()
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

export const editAccount = (data) => {
    const formData = createFormData(data);
    return (dispatch) => {
        return put(`/account`, formData).exec()
            .then((response) => {
                return dispatch({
                    type: EDIT_ACCOUNT,
                    payload: {
                        account: response.data
                    }
                });
            });
    };
};

export const getMyProfile = () => {
    return (dispatch) => {
        return get(`/account/my-profile`).exec()
            .then((response) => {
                return dispatch({
                    type: MY_PROFILE,
                    payload: {
                        myProfile: response.data
                    }
                });
            });
    };
};

export const getNotifications = (key) => {
    return (dispatch) => {
        return get('/account/notification').exec()
            .then((response) => {
                return dispatch({
                    type: GET_NOTIFICATIONS,
                    payload: {
                        notifications: response.data
                    }
                });
            });
    }
};