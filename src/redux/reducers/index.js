// src/reducers.js

const initialState = {
    user: null, // Holds the username
    isAuthenticated: false // Authentication status
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user 
            };
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
                user: null
            };
        default:
            return state;
    }
};

export default authReducer;