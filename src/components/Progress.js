import React from 'react';
import progressChart from '../assets/projectphoto.jpeg'; 

const Progress = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-semibold text-gray-800">Progress</h1>
            <p className="mt-2 text-gray-600">Track your fitness progress over time.</p>

            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-700">Your Progress Chart</h2>
                <div className="bg-white p-4 rounded-lg shadow-md mt-4">
                    <img src={progressChart} alt="Progress Chart" className="w-full h-auto" />
                </div>
            </div>
        </div>
    );
};

export default Progress;
