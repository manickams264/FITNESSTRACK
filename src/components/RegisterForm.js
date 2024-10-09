import React, { useState } from 'react';
import { registerUser } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); 
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userData = { username, password };
            const result = await registerUser(userData);

            if (result.success) {
                navigate('/'); 
            } else if (result.message === 'User already exists') {
                setErrorMessage('User already registered. Please login.');
            } else {
                setErrorMessage('Registration failed. Please try again.');
            }
        } catch (error) {
            console.error('Registration error:', error);
            setErrorMessage('An error occurred during registration. Please try again.');
        }
    };

    return (
        <div>
            {errorMessage && <div className="error-popup">{errorMessage}</div>} {/* Pop-up for error */}
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder="Username" 
                    required 
                />
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Password" 
                    required 
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterForm;
