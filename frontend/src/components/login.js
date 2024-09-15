



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api';
import './LoginPage.css'; // Import the CSS file for styling

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login(email, password);
            localStorage.setItem('token', response.token); // Save token to localStorage
            alert('Login successful!');
            navigate('/dashboard'); // Redirect to dashboard or other page
        } catch (error) {
            alert('Login failed. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login to Your Account</h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="login-input"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="login-input"
                    />
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
