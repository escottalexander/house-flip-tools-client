import { authReducer } from './auth';
import * as actions from '../actions';
import {
    SET_AUTH_TOKEN,
    CLEAR_AUTH,
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_ERROR
} from '../actions/auth';

describe('authReducer', () => {
    const initialState = {
        authToken: null,
        currentUser: null,
        loading: false,
        error: null
    };


    it('Should set the initial state when nothing is passed in', () => {
        const state = authReducer(undefined, { type: '__UNKNOWN' });
        expect(state).toEqual(initialState);
    });
});

