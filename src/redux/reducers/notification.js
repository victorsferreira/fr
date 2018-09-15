import { GET_NOTIFICATIONS, REMOVE_NOTIFICATION } from '../actions';

const defaultState = {
    list: []
};

const notification = (state = defaultState, action) => {
    switch (action.type) {
        case GET_NOTIFICATIONS: {
            const list = action.payload.notifications;
            return { ...state, list };
        }

        case REMOVE_NOTIFICATION: {
            const { id } = action.payload;
            const list = state.list.filter((notification)=>{
                return notification.id !== id;
            });

            return { ...state, list };
        }

        default:
            return state;
    }
};

export default notification;