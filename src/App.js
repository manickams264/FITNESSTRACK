import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Workouts from './components/Workouts';
import Nutrition from './components/Nutrition';
import './index.css';
import LoginForm from './components/LoginForm';
import Progress from './components/Progress';
import Settings from './components/Settings';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <div className="min-h-screen bg-gray-100">
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/" element={<LoginForm />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/dashboard" element={<Dashboard />}>
                            <Route path="workouts" element={<Workouts />} />
                            <Route path="nutrition" element={<Nutrition />} />
                            <Route path="progress" element={<Progress />} />
                            <Route path="settings" element={<Settings />} />
                        </Route>
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;
