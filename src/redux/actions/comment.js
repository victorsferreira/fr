import { get, post, del } from '../../libs/api';

export const GET_COMMENTS = 'GET_COMMENTS';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export const getComments = (target) => {
    return (dispatch) => {
        return get(`/comment/${target}`).exec()
            .then((response) => {
                return dispatch({
                    type: GET_COMMENTS,
                    payload: {
                        comments: response.data
                    }
                });
            });
    }
};

export const createComment = (type, target, content, parent) => {
    const data = {
        content,
        parent
    };

    return (dispatch) => {
        return post(`/comment/${type}/${target}`, data).exec()
            .then((response) => {
                return dispatch({
                    type: CREATE_COMMENT,
                    payload: {
                        comment: response.data
                    }
                });
            });
    }
};

export const deleteComment = (id) => {
    return (dispatch) => {
        return del(`/comment/${id}`).exec()
            .then((response) => {
                return dispatch({
                    type: DELETE_COMMENT,
                    payload: {
                        id
                    }
                });
            });
    }
};