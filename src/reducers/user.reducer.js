import { SET_LOGIN } from '../actions/types';

const initialState = {
    isLoggedIn: false,
    desk: '',
    role: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN:
            return {
                ...state,
                isLoggedIn: true
            }
        default:
            return state;
    }
}