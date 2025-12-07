// src/UserProfile.js
import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions';
import styles from "./styles.module.css"; // Importing CSS Module

const UserProfile = ({ user, logout }) => {
    const handleLogout = () => {
        logout(); // Dispatch the logout action
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Welcome, {user}! 👋</h2>
            <p className={styles.message}>You have successfully logged in.</p>
            <button 
                onClick={handleLogout} 
                className={styles.logoutButton}
            >
                Log Out
            </button>
        </div>
    );
};

// Map state (user info) to props
const mapStateToProps = (state) => ({
    user: state.user,
});

// Map dispatch (actions) to props
const mapDispatchToProps = {
    logout,
};

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);