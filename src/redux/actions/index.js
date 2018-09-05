import { get } from '../../libs/api';

import { toActionName, toReducerName } from '../../libs/helpers';
import { getReducerState } from '../store';

export * from './session';
export * from './account';
export * from './file';
export * from './product';

export function getResourceList(resource) {
    const type = `GET_${toActionName(resource)}_LIST`;
    return (dispatch) => {
        return get(resource).exec()
            .then((response) => {
                return dispatch({
                    type,
                    payload: { data: response.data }
                });
            });
    };
};

export function getResourceItem(resource, id) {
    const type = `GET_${toActionName(resource)}_ITEM`;
    // const reducerName = toReducerName(resource);
    // const reducer = getReducerState(reducerName);

    return (dispatch) => {
        return get(`${resource}/${id}`).exec()
            .then((response) => {
                return dispatch({
                    type,
                    payload: { data: response.data, id }
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
                    payload: { data: response.data, id }
                });
            });
    };
};