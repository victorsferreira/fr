import { get, put } from '../../libs/api';

export const GET_NOTIFICATIONS = 'GET_NOTIFICATIONS';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

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

export const acceptFollowRequest = (id) => {
    return (dispatch) => {
        return put('/account/accept-follow-request', { id }).exec()
            .then((response) => {
                return dispatch({
                    type: REMOVE_NOTIFICATION,
                    payload: {
                        id
                    }
                });
            });
    }
};

export const declineFollowRequest = (id) => {
    return (dispatch) => {
        return put('/account/decline-follow-request', { id }).exec()
            .then((response) => {
                return dispatch({
                    type: REMOVE_NOTIFICATION,
                    payload: {
                        id
                    }
                });
            });
    }
};