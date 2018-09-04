import { get } from '../../libs/api';

// export const GET_IMAGE_URL = 'GET_IMAGE_URL';

// export const getImageUrl = (key) => {
//     return (dispatch) => {
//         const request = get(`/files/${key}`);

//         request.then((response) => {
//             return dispatch({
//                 type: GET_IMAGE_URL,
//                 payload: {
//                     key,
//                     url: response.data
//                 }
//             });
//         });

//         return request;
//     };
// };