import React, { useState } from "react";

const SearchPage = () => {
    const [query, setQuery] = useState("");
    
    const items = [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Node.js",
        "Next.js",
        "MongoDB",
        "Python",
        "Django",
        "TypeScript",
        "Vue.js",
        "Angular",
        "Bootstrap",
    ];

    const filteredItems = items.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="flex flex-col items-center min-h-screen bg-amber-50 text-gray-900 p-6">
            {/* Header */}
            <h1 className="text-2xl font-bold mb-6 text-center sm:text-3xl lg:text-4xl">
                Search Here!!!
            </h1>

            {/* Search Bar */}
            <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl">
                <div className="flex rounded-lg overflow-hidden border border-gray-300 shadow-lg">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="flex-grow px-4 py-3 sm:py-4 bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:bg-white transition-colors"
                    />
                    <button className="bg-blue-600 px-5 py-3 sm:px-6 sm:py-4 text-sm sm:text-base font-medium text-white hover:bg-blue-700 transition-colors">
                        Search
                    </button>
                </div>
            </div>

            {/* Search Results */}
            <div className="mt-6 w-full max-w-md sm:max-w-lg lg:max-w-xl">
                {query && (
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold text-gray-700 mb-2">Results:</h2>
                        {filteredItems.length > 0 ? (
                            <ul className="space-y-2">
                                {filteredItems.map((item, index) => (
                                    <li key={index} className="text-gray-800">
                                        🔍 {item}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-500">No results found.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchPage;
