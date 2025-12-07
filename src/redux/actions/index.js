// src/actions.js

// Action Types
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

/**
 * Action creator for logging in.
 * @param {string} username - The username.
 */
export const login = (username) => ({
    type: LOGIN,
    payload: {
        user: username
    }
});

// Action creator for logging out
export const logout = () => ({
    type: LOGOUT
});