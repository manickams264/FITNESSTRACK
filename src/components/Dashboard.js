import React from 'react';
import { useAuth } from '../context/AuthContext';
import progressChart from '../assets/projectphoto.jpeg'; 
import { FaTachometerAlt, FaDumbbell, FaAppleAlt, FaChartLine, FaCog } from 'react-icons/fa'; 
import { Link, Outlet, useLocation } from 'react-router-dom'; 

const Dashboard = () => {
    const { user } = useAuth();
    const location = useLocation(); 
    const isDashboardPage = location.pathname === '/dashboard'; 
    return (
        <div className="flex min-h-screen bg-gray-100">
            
            <aside className="w-64 bg-white shadow-md">
                <div className="p-4 text-center border-b">
                    <h2 className="text-xl font-semibold text-gray-700">Fitness Tracker</h2>
                    <p className="text-gray-500">{user ? `Welcome, ${user.username}` : 'Guest'}</p>
                </div>
                <nav className="mt-5">
                    <Link to="/dashboard" className="flex items-center p-3 text-gray-600 hover:bg-indigo-100 transition duration-200">
                        <FaTachometerAlt className="mr-3" />
                        <span>Dashboard</span>
                    </Link>
                    <Link to="/dashboard/workouts" className="flex items-center p-3 text-gray-600 hover:bg-indigo-100 transition duration-200">
                        <FaDumbbell className="mr-3" />
                        <span>My Workouts</span>
                    </Link>
                    <Link to="/dashboard/nutrition" className="flex items-center p-3 text-gray-600 hover:bg-indigo-100 transition duration-200">
                        <FaAppleAlt className="mr-3" />
                        <span>Nutrition</span>
                    </Link>
                    <Link to="/dashboard/progress" className="flex items-center p-3 text-gray-600 hover:bg-indigo-100 transition duration-200">
                        <FaChartLine className="mr-3" />
                        <span>Progress</span>
                    </Link>
                    <Link to="/dashboard/settings" className="flex items-center p-3 text-gray-600 hover:bg-indigo-100 transition duration-200">
                        <FaCog className="mr-3" />
                        <span>Settings</span>
                    </Link>
                </nav>
            </aside>
            <main className="flex-1 p-6">
                {isDashboardPage ? ( 
                    <>
                        <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
                        <p className="mt-2 text-gray-600">Here’s your fitness overview:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <h2 className="text-xl font-semibold text-gray-700">Daily Steps</h2>
                                <p className="text-3xl font-bold text-indigo-500">8,432</p>
                                <p className="text-gray-500">Goal: 10,000 Steps</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <h2 className="text-xl font-semibold text-gray-700">Calories Burned</h2>
                                <p className="text-3xl font-bold text-indigo-500">650 kcal</p>
                                <p className="text-gray-500">Goal: 800 kcal</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <h2 className="text-xl font-semibold text-gray-700">Active Time</h2>
                                <p className="text-3xl font-bold text-indigo-500">1h 15m</p>
                                <p className="text-gray-500">Goal: 1h 30m</p>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold text-gray-800">Your Progress</h2>
                            <div className="bg-white p-4 rounded-lg shadow-md mt-4">
                                <p className="text-gray-600">Track your workouts and see your improvement over time!</p>
                                <div className="mt-4">
                                    <img src={progressChart} alt="Progress Chart" className="w-full h-auto" />
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <Outlet /> 
                )}
            </main>
        </div>
    );
};

export default Dashboard;
