import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/ui/Sidebar";

const AppPage = () => {
    return (
        <div className="flex h-screen w-full overflow-hidden">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <main className="flex-1 h-screen bg-gray-900 text-white overflow-y-auto p-6 md:p-8 lg:p-10">
                <Outlet /> {/* Renders child pages dynamically */}
            </main>
        </div>
    );
};

export default AppPage;