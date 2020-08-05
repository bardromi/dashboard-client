import { SET_LOGIN, SET_DROPDOWN_SELECTOR } from './types';

export const loginUser = () => dispatch => {
    dispatch(setUserLogInAction());
}

export const setDropDownSelector = (selectorName, selectorValue) => dispatch => {
    dispatch(setSelectorAction(selectorName, selectorValue));
}

const setUserLogInAction = () => (
    {
        type: SET_LOGIN,
        payload: true
    }
)

const setSelectorAction = (selectorName, selectorValue) => (
    {
        type: SET_DROPDOWN_SELECTOR,
        payload: {
            selectorName,
            selectorValue
        }
    }
)
