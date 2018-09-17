import { get, post, patch } from '../../libs/api';

export const GET_RELATION = 'GET_RELATION';
export const CREATE_RELATION = 'CREATE_RELATION';
export const UNWISH_RELATION = 'UNWISH_RELATION';

export const getRelation = (targetId) => {
    return (dispatch) => {
        return get(`/relation/target/${targetId}`).exec()
            .then((response) => {
                return dispatch({
                    type: GET_RELATION,
                    payload: {
                        relation: response.data
                    }
                });
            });
    }
};

export const createRelation = (status, targetId) => {
    const data = {
        target: targetId,
        status
    };

    return (dispatch) => {
        return post(`/relation`, data).exec()
            .then((response) => {
                return dispatch({
                    type: CREATE_RELATION,
                    payload: {
                        relation: response.data
                    }
                });
            });
    }
};

export const unwishRelation = (targetId) => {
    return (dispatch) => {
        return patch(`/relation/${targetId}/unwish`).exec()
            .then((response) => {
                return dispatch({
                    type: UNWISH_RELATION,
                    payload: {
                        relation: response.data
                    }
                });
            });
    }
};