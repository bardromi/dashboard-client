import { SET_LOGIN } from './types';

export const loginUser = () => dispatch => {
    dispatch(setUserLogIn());
}

export const setUserLogIn = () => (
    {
        type: SET_LOGIN,
        payload: true
    }
)

