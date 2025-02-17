import { createBrowserRouter } from "react-router-dom";
import AppPage from "../pages/AppPage";
import HomePage from "../pages/HomePage";
import InboxPage from "../pages/InboxPage";
import CalenderPage from "../pages/CalenderPage";
import SearchPage from "../pages/SearchPage"; // Import new pages
import SettingsPage from "../pages/SettingsPage"; 
import React from "react";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppPage />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/inbox", element: <InboxPage /> },
            { path: "/calender", element: <CalenderPage /> },
            { path: "/search", element: <SearchPage /> }, // Added Search Page
            { path: "/settings", element: <SettingsPage /> }, // Added Settings Page
        ],
    },
]);

export default router;
