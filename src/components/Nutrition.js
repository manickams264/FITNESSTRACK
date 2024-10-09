import React from 'react';

const Nutrition = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-semibold text-gray-800">Nutrition</h1>
            <p className="mt-2 text-gray-600">Monitor your meals and nutrition intake.</p>

            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-700">Recent Meals</h2>
                <ul className="mt-4 space-y-4">
                    <li className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold">Breakfast: Oatmeal</h3>
                        <p>Calories: 250</p>
                        <p>Date: 2024-10-01</p>
                    </li>
                    <li className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold">Lunch: Grilled Chicken Salad</h3>
                        <p>Calories: 400</p>
                        <p>Date: 2024-10-01</p>
                    </li>
                    <li className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold">Dinner: Salmon and Broccoli</h3>
                        <p>Calories: 500</p>
                        <p>Date: 2024-10-01</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Nutrition;
