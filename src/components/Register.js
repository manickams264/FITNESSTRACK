import React, { useState } from 'react';
import { registerUser } from '../services/authService'; 
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import log from '../assets/fitness_website.webp';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { setUser } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!username || !password) {
            setError('Both fields are required.'); 
            return;
        }
    
        setError('');
    
        try {
            const data = await registerUser({ username, password }); 
            console.log('Registration response:', data); 
            if (data && data._id) {
                const user = { username }; 
                localStorage.setItem('user', JSON.stringify(user)); 
                setUser(user);
                navigate('/'); 
            } else {
                setError('Registration failed. Please try again.'); 
            }
        } catch (error) {
            console.error('Registration error:', error); 
            setError('User already registered. Please login.'); 
        }
    };
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
            <div className="absolute inset-0">
                <img src={log} alt="Fitness Background" className="object-cover w-full h-full" />
                <div className="bg-black opacity-50 absolute inset-0"></div> 
            </div>
            <div className="relative z-10 bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h2 className="text-3xl font-semibold text-center mb-6 text-gray-700">Create an Account 👋</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-600">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className={`w-full px-4 py-2 border ${
                                error && !username ? 'border-red-500' : 'border-gray-300'
                            } rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`w-full px-4 py-2 border ${
                                error && !password ? 'border-red-500' : 'border-gray-300'
                            } rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>} 
                    <button
                        type="submit"
                        className="w-full bg-indigo-500 text-white font-semibold py-2 rounded-md hover:bg-indigo-600 transition duration-200"
                    >
                        Register
                    </button>
                </form>
                <p className="mt-6 text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <a href="/" className="text-indigo-500 hover:underline">
                        Log In
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Register;
