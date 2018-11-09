import * as actions from '../actions';

const initialState = {
    authToken: null,
    currentUser: null,
    loading: false,
    error: null
};

export const authReducer = (state = initialState, action) => {

    /// REGISTER USER
    if (action.type === actions.REGISTER_USER) {
        console.log("user registered")
    }

    return state;
};