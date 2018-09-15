import { put, post, get, del, createFormData } from '../../libs/api';
import { CREATE_SESSION } from './session';

export const GET_PROFILE = 'GET_PROFILE';
export const MY_PROFILE = 'MY_PROFILE';
export const EDIT_ACCOUNT = 'EDIT_ACCOUNT';
export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';

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

export const getProfile = (id) => {
    return (dispatch) => {
        return get(`/account/${id}/profile`).exec()
            .then((response) => {
                return dispatch({
                    type: GET_PROFILE,
                    payload: {
                        profile: response.data
                    }
                });
            });
    };
};

export const follow = (id) => {
    return (dispatch) => {
        return put(`/account/${id}/follow`).exec()
            .then((response) => {
                return dispatch({
                    type: FOLLOW,
                    payload: {
                        account: response.data.account,
                        status: response.data.status
                    }
                });
            });
    }
};

export const unfollow = (id) => {
    return (dispatch) => {
        return del(`/account/${id}/follow`).exec()
            .then((response) => {
                return dispatch({
                    type: UNFOLLOW,
                    payload: {
                        account: response.data.account
                    }
                });
            });
    }
};