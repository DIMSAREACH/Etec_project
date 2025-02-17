import React, { useState } from "react";

const SettingsPage = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [notifications, setNotifications] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const toggleNotifications = () => {
        setNotifications(!notifications);
    };

    return (
        <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-amber-50 text-gray-900"} p-6 transition-colors duration-300`}>
            {/* Header */}
            <h1 className="text-3xl font-bold mb-8 text-center">Settings</h1>

            {/* Settings Section */}
            <div className="space-y-6">
                {/* Dark Mode Toggle */}
                <div className={`rounded-lg p-4 flex justify-between items-center ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}>
                    <div>
                        <h2 className="text-lg font-semibold">Dark Mode</h2>
                        <p className="text-sm text-gray-500">Enable or disable dark mode.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only" checked={darkMode} onChange={toggleDarkMode} />
                        <div className={`w-11 h-6 rounded-full transition-colors duration-300 
                            ${darkMode ? "bg-green-500" : "bg-gray-400"}`}>
                            <div className={`absolute top-[2px] left-[2px] h-5 w-5 bg-white rounded-full transition-all 
                                ${darkMode ? "translate-x-full" : ""}`}>
                            </div>
                        </div>
                    </label>
                </div>

                {/* Notifications Toggle */}
                <div className={`rounded-lg p-4 flex justify-between items-center ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}>
                    <div>
                        <h2 className="text-lg font-semibold">Notifications</h2>
                        <p className="text-sm text-gray-500">Turn on/off notifications.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only" checked={notifications} onChange={toggleNotifications} />
                        <div className={`w-11 h-6 rounded-full transition-colors duration-300 
                            ${notifications ? "bg-green-500" : "bg-gray-400"}`}>
                            <div className={`absolute top-[2px] left-[2px] h-5 w-5 bg-white rounded-full transition-all 
                                ${notifications ? "translate-x-full" : ""}`}>
                            </div>
                        </div>
                    </label>
                </div>

                {/* Account Setting */}
                <div className={`rounded-lg p-4 ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}>
                    <h2 className="text-lg font-semibold mb-2">Account Settings</h2>
                    <p className="text-sm text-gray-500 mb-4">Manage your account preferences.</p>
                    <button className={`${darkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"} px-4 py-2 rounded transition-colors`}>
                        Edit Profile
                    </button>
                </div>

                {/* Privacy Setting */}
                <div className={`rounded-lg p-4 ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}>
                    <h2 className="text-lg font-semibold mb-2">Privacy Settings</h2>
                    <p className="text-sm text-gray-500 mb-4">Control your privacy preferences.</p>
                    <button className={`${darkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"} px-4 py-2 rounded transition-colors`}>
                        Manage Privacy
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;
