// src/LoginForm.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/actions';
import styles from './styles.module.css'; // Importing CSS Module

const LoginForm = ({ login }) => {
    // Local state for input handling
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple Validation
        if (!username.trim() || !password.trim()) {
            setError('Please enter both a username and a password.');
            return;
        }
        
        // Dispatch the login action
        login(username); 
        
        setUsername('');
        setPassword('');
        setError('');
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Log In</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="username">Username:</label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={styles.input}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.input}
                    />
                </div>
                {error && <p className={styles.error}>{error}</p>}
                <button type="submit" className={styles.button}>
                    Log In
                </button>
            </form>
        </div>
    );
};

// Map dispatch (actions) to props
const mapDispatchToProps = {
    login,
};

// Connect component to Redux
export default connect(null, mapDispatchToProps)(LoginForm);