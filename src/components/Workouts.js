import React from 'react';

const Workouts = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-semibold text-gray-800">My Workouts</h1>
            <p className="mt-2 text-gray-600">Track your workouts and improve your fitness.</p>

            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-700">Workout History</h2>
                <ul className="mt-4 space-y-4">
                    <li className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold">Chest Workout</h3>
                        <p>Duration: 45 mins</p>
                        <p>Date: 2024-10-01</p>
                    </li>
                    <li className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold">Leg Day</h3>
                        <p>Duration: 50 mins</p>
                        <p>Date: 2024-10-02</p>
                    </li>
                    <li className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold">Cardio Session</h3>
                        <p>Duration: 30 mins</p>
                        <p>Date: 2024-10-03</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Workouts;
