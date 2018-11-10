import { SET_AUTH_TOKEN, setAuthToken, CLEAR_AUTH, clearAuth, AUTH_REQUEST, authRequest, AUTH_SUCCESS, authSuccess, AUTH_ERROR, authError } from './auth';

describe('setAuthToken', () => {
    it('Should return the action', () => {
        const authToken = 'IL0V3P1ZZA';
        const action = setAuthToken(authToken);
        expect(action.type).toEqual(SET_AUTH_TOKEN);
        expect(action.authToken).toEqual(authToken);
    });
});

describe('clearAuth', () => {
    it('Should return the action', () => {
        const action = clearAuth();
        expect(action.type).toEqual(CLEAR_AUTH);
    });
});

describe('authRequest', () => {
    it('Should return the action', () => {
        const action = authRequest();
        expect(action.type).toEqual(AUTH_REQUEST);
    });
});

describe('authSuccess', () => {
    it('Should return the action', () => {
        const user = 'jerry';
        const action = authSuccess(user);
        expect(action.type).toEqual(AUTH_SUCCESS);
        expect(action.currentUser).toEqual(user);
    });
});

describe('authError', () => {
    it('Should return the action', () => {
        const error = 'Bad Error';
        const action = authError(error);
        expect(action.type).toEqual(AUTH_ERROR);
        expect(action.error).toEqual(error);
    });
});