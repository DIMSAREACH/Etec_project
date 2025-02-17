import React from "react";

const InboxPage = () => {
    // Dummy data for inbox messages
    const messages = [
        { id: 1, sender: "Sem Reaksa", subject: "Meeting Reminder", time: "10:30 AM" },
        { id: 2, sender: "Dim Sareach", subject: "Project Update", time: "9:45 AM" },
        { id: 3, sender: "Korb Kimheang", subject: "Weekend Plans", time: "Yesterday" },
        { id: 4, sender: "Mes Bochan", subject: "Invoice Submission", time: "2 days ago" },
    ];

    return (
        <div className="flex flex-col h-screen bg-amber-50">
            {/* Header */}
            <header className="bg-white shadow-md py-4 px-6 sm:px-8 lg:px-10">
                <h1 className="text-xl font-bold text-gray-800 sm:text-2xl lg:text-3xl">Inbox</h1>
            </header>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
                <ul className="space-y-4">
                    {messages.map((message) => (
                        <li
                            key={message.id}
                            className="bg-white rounded-lg shadow-sm p-4 sm:p-5 lg:p-6 flex justify-between items-center"
                        >
                            <div>
                                <p className="font-semibold text-gray-800 text-sm sm:text-base lg:text-lg">
                                    {message.sender}
                                </p>
                                <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
                                    {message.subject}
                                </p>
                            </div>
                            <span className="text-xs text-gray-500 sm:text-sm lg:text-base">
                                {message.time}
                            </span>
                        </li>
                    ))}
                </ul>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t p-4 sm:p-6 lg:p-8">
                <button className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors sm:w-auto sm:px-6 sm:py-3 lg:px-8 lg:py-4">
                    Compose New Message
                </button>
            </footer>
        </div>
    );
};

export default InboxPage;