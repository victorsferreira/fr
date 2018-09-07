import { LOGOUT, GET_NOTIFICATIONS, CREATE_SESSION, LOAD_SESSION, UPDATE_SESSION } from '../actions/session';

const defaultState = {
    loaded: false,
    token: null,
    account: {},
    notifications: []
};

const session = (state = defaultState, action) => {
    switch (action.type) {
        case LOGOUT: {
            deletePersistedSession();

            return { ...state, token: null, account: {} }
        }

        case CREATE_SESSION: {
            const data = action.payload;

            persistSession(data);

            const { token, account } = data;
            return { ...state, token, account }
        }

        case LOAD_SESSION: {
            const persistedSession = getPersistedSession();

            return { ...state, ...persistedSession, loaded: true }
        }

        case UPDATE_SESSION: {
            const data = { token: state.token };
            data.account = action.payload.account;

            persistSession(data);

            return { ...state, account: data.account }
        }

        case GET_NOTIFICATIONS: {
            const { notifications } = action.payload;
            return { ...state, notifications }
        }

        default:
            return state;
    }
};

export default session;