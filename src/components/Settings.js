import React from 'react';

const Settings = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-semibold text-gray-800">Settings</h1>
            <p className="mt-2 text-gray-600">Manage your account settings and preferences.</p>

            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-700">Account Settings</h2>
                <form className="mt-4 space-y-4">
                    <div>
                        <label className="block text-gray-600">Username</label>
                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label className="block text-gray-600">Password</label>
                        <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                    </div>
                    <button className="bg-indigo-500 text-white font-semibold py-2 rounded-md hover:bg-indigo-600 transition duration-200">
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Settings;
