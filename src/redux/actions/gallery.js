import { get, del, put, post, createFormData, createFormDataFromArray } from '../../libs/api';

export const GET_GALLERY_PHOTOS = 'GET_GALLERY_PHOTOS';
export const EDIT_GALLERY_PHOTO = 'EDIT_GALLERY_PHOTO';
export const DELETE_GALLERY_PHOTO = 'DELETE_GALLERY_PHOTO';
export const UPLOAD_GALLERY_PHOTOS = 'UPLOAD_GALLERY_PHOTOS';
export const GET_PROFILE_GALLERY = 'GET_PROFILE_GALLERY';

export function getProfileGallery(id, galleryId) {
    return (dispatch) => {
        return get(`account/${id}/gallery/${galleryId}`).exec()
            .then((response) => {
                return dispatch({
                    type: GET_PROFILE_GALLERY,
                    payload: { id, galleryId, gallery: response.data }
                });
            });
    };
}

export function getGalleryPhotos(id) {
    return (dispatch) => {
        return get(`gallery/${id}/photo`).exec()
            .then((response) => {
                return dispatch({
                    type: GET_GALLERY_PHOTOS,
                    payload: { id, photos: response.data }
                });
            });
    };
}

export function editGalleryPhoto(id, photoId, data) {
    data = createFormData(data);
    return (dispatch) => {
        return put(`gallery/${id}/photo/${photoId}`, data).exec()
            .then((response) => {
                return dispatch({
                    type: EDIT_GALLERY_PHOTO,
                    payload: { id, photoId, photo: response.data }
                });
            });
    };
}

export function uploadGalleryPhotos(id, data) {
    data = createFormDataFromArray(data);
    return (dispatch) => {
        return post(`gallery/${id}/photo`, data).exec()
            .then((response) => {
                return dispatch({
                    type: UPLOAD_GALLERY_PHOTOS,
                    payload: { id, photo: response.data }
                });
            });
    };
}

export function deleteGalleryPhoto(id, photoId) {
    return (dispatch) => {
        return del(`gallery/${id}/photo/${photoId}`).exec()
            .then((response) => {
                return dispatch({
                    type: DELETE_GALLERY_PHOTO,
                    payload: { id, photoId }
                });
            });
    };
}