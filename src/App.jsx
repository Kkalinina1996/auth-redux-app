// src/App.js
import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './components/LoginForm';
import UserProfile from './components/UserProfile';
import styles from './styles/app.module.css';

const App = ({ isAuthenticated }) => {
    return (
        <div className={styles.app}>
            <h1 className={styles.title}>Redux Authentication App</h1>
            {/* Conditional Rendering */}
            {isAuthenticated ? <UserProfile /> : <LoginForm />}
        </div>
    );
};

// Map state (isAuthenticated status) to props
const mapStateToProps = (state) => ({
    isAuthenticated: state.isAuthenticated,
});

// Connect component to Redux
export default connect(mapStateToProps)(App);