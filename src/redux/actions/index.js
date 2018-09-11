import { get, del, put, post, createFormData } from '../../libs/api';

import { toActionName, toReducerName } from '../../libs/helpers';
import { getReducerState } from '../store';

export * from './session';
export * from './account';
export * from './file';
export * from './product';

export function getResourceList(resource, options = {}) {
    const type = `GET_${toActionName(resource)}_LIST`;
    return (dispatch) => {
        return get(resource).exec()
            .then((response) => {
                const list = response.data;

                if(options.scope){
                    options.scope.setState({ list });
                }

                return dispatch({
                    type,
                    payload: { list }
                });
            });
    };
};

export function getResourceItem(resource, id, options = {}) {
    const type = `GET_${toActionName(resource)}_ITEM`;
    // const reducerName = toReducerName(resource);
    // const reducer = getReducerState(reducerName);

    return (dispatch) => {
        return get(`${resource}/${id}`).exec()
            .then((response) => {
                const item = response.data;

                if(options.scope){
                    options.scope.setState({ item });
                }

                return dispatch({
                    type,
                    payload: { item, id }
                });
            });
    };
};

export function getResourceProfile(resource, id) {
    const type = `GET_${toActionName(resource)}_PROFILE`;
    // const reducerName = toReducerName(resource);
    // const reducer = getReducerState(reducerName);

    return (dispatch) => {
        return get(`${resource}/${id}/profile`).exec()
            .then((response) => {
                return dispatch({
                    type,
                    payload: { item: response.data, id }
                });
            });
    };
};

export function deleteResourceItem(resource, id, options) {
    const type = `DELETE_${toActionName(resource)}_ITEM`;

    return (dispatch) => {
        return del(`${resource}/${id}`).exec()
            .then((response) => {
                // if(options.scope){
                //     const list = options.scope.state.list.filter((item) => {
                //         return item.id !== id;
                //     });

                //     options.scope.setState({ list });
                // }

                return dispatch({
                    type,
                    payload: { id }
                });
            });
    };
};

export function editResourceItem(resource, id, data, options = {}) {
    const type = `EDIT_${toActionName(resource)}_ITEM`;
    if(options.formData) data = createFormData(data);

    return (dispatch) => {
        return put(`${resource}/${id}`, data).exec()
            .then((response) => {
                const item = response.data;

                if(options.scope){
                    options.scope.setState({ item });
                }

                return dispatch({
                    type,
                    payload: { item, id }
                });
            });
    };
};

export function createResourceItem(resource, data, options = {}) {
    const type = `CREATE_${toActionName(resource)}_ITEM`;
    if(options.formData) data = createFormData(data);

    return (dispatch) => {
        return post(`${resource}`, data).exec()
            .then((response) => {
                const item = response.data;

                if(options.scope){
                    options.scope.setState({ item });
                }

                return dispatch({
                    type,
                    payload: { item }
                });
            });
    };
};