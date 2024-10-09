import React, { useState } from 'react';
import { login } from '../services/authService'; 
import { useNavigate } from 'react-router-dom'; 

const LoginForm = () => {
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState('');  
    const [errorMessage, setErrorMessage] = useState(''); 
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        try {
            const result = await login(username, password);
            console.log('Login successful:', result);
            setErrorMessage('');  
            navigate('/dashboard');  
        } catch (error) {
            setErrorMessage('Invalid credentials. Please register first or check your details.');
        }
    };

    return (
        <div>
            {errorMessage && <div className="error-popup">{errorMessage}</div>}
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
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
