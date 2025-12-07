// src/store.js
import { createStore } from 'redux';
import authReducer from '../reducers';

// Create and export the store
const store = createStore(authReducer);

export default store;