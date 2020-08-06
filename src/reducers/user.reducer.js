import { SET_LOGIN, SET_DROPDOWN_SELECTOR } from '../actions/types';

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
        case SET_DROPDOWN_SELECTOR:
            return {
                ...state,
                [action.payload.selectorName]: action.payload.selectorValue
            }
        default:
            return state;
    }
}