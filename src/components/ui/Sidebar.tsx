import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sidebarItems } from "../../utils";

const Sidebar = () => {
    const [isVisible, setIsVisible] = useState(false); // Hidden by default on mobile

    return (
        <>
            {/* Sidebar (Hidden on small screens, always visible on md+) */}
            <aside className="h-screen w-64 bg-neutral-900 text-white flex flex-col px-4 py-6 space-y-4 md:flex hidden">
                <h2 className="text-gray-400 text-sm uppercase font-semibold">
                    Application
                </h2>
                {sidebarItems.map((item) => (
                    <Link
                        key={item.route}
                        to={item.route}
                        className="flex items-center gap-3 p-2 text-gray-300 hover:bg-gray-700 rounded-lg transition duration-300"
                    >
                        <img src={item.icon} alt={item.text} className="w-5 h-5" />
                        <span>{item.text}</span>
                    </Link>
                ))}
            </aside>

            {/* Toggle Button (Now positioned on the left) */}
            <button
                onClick={() => setIsVisible(!isVisible)}
                className="fixed top-4 left-4 z-50 bg-neutral-900 text-white p-2 rounded-full shadow-lg hover:bg-neutral-700 focus:outline-none md:hidden"
            >
                {isVisible ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                )}
            </button>

            {/* Responsive Sidebar (Slides in from the left) */}
            <aside
                className={`h-screen bg-neutral-900 text-white fixed top-0 left-0 transition-transform duration-300 ${
                    isVisible ? "w-64 translate-x-0" : "-translate-x-full"
                } md:hidden`}
            >
                <h2 className="text-gray-400 text-sm uppercase font-semibold px-4 py-6 text-center">
                    Application
                </h2>
                {sidebarItems.map((item) => (
                    <Link
                        key={item.route}
                        to={item.route}
                        className="flex items-center gap-3 p-2 text-gray-300 hover:bg-gray-700 rounded-lg transition duration-300"
                    >
                        <img src={item.icon} alt={item.text} className="w-5 h-5" />
                        <span>{item.text}</span>
                    </Link>
                ))}
            </aside>
        </>
    );
};

export default Sidebar;
