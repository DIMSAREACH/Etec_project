import React from "react";

const CalendarPage = () => {
    return (
        <div className="w-full h-screen max-w-4xl mx-auto bg-amber-50 shadow-lg rounded-lg p-4 sm:p-6 lg:p-8">
            {/* Header */}
            <h1 className="text-xl font-bold text-center text-black mb-4 sm:text-2xl lg:text-3xl">
                Khmer New Year - April 2025 🎉
            </h1>

            {/* Days of the Week */}
            <div className="grid grid-cols-7 gap-2 text-center font-semibold text-black text-xs sm:text-sm lg:text-base mb-4">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                    <div key={day} className="uppercase">{day}</div>
                ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2">
                {/* Empty Cells for Offset */}
                {Array.from({ length: 1 }).map((_, index) => (
                    <div key={`empty-${index}`} className="text-center"></div>
                ))}

                {/* Days of the Month */}
                {Array.from({ length: 30 }).map((_, index) => {
                    const day = index + 1;
                    const isKhmerNewYear = day >= 13 && day <= 16;
                    
                    return (
                        <div
                            key={`day-${day}`}
                            className={`text-center py-2 px-1 border rounded text-black text-xs sm:text-sm lg:text-base transition-colors
                                ${isKhmerNewYear ? "bg-yellow-300 font-bold text-red-700" : "hover:bg-gray-200"}
                            `}
                        >
                            {day}
                        </div>
                    );
                })}
            </div>

            {/* Events Section */}
            <div className="mt-6 space-y-2">
                <h2 className="text-lg font-semibold text-black mb-2 sm:text-xl lg:text-2xl">
                    Khmer New Year Events 🎊
                </h2>

                <div className="flex items-center">
                    <span className="text-xs font-medium text-gray-600 sm:text-sm lg:text-base">
                        April 13, 10:00 AM:
                    </span>
                    <span className="ml-2 text-xs text-black sm:text-sm lg:text-base">
                        The Beautiful Sunday for Holiday before KNY 🎉
                    </span>
                </div>

                <div className="flex items-center">
                    <span className="text-xs font-medium text-gray-600 sm:text-sm lg:text-base">
                        April 14, 7:00 PM:
                    </span>
                    <span className="ml-2 text-xs text-black sm:text-sm lg:text-base">
                        Khmer New Year - Maha Songkran 🏯
                    </span>
                </div>

                <div className="flex items-center">
                    <span className="text-xs font-medium text-gray-600 sm:text-sm lg:text-base">
                        April 15, 9:00 AM:
                    </span>
                    <span className="ml-2 text-xs text-black sm:text-sm lg:text-base">
                        Family reunions & traditional games (Vara Vanabat) 🎯
                    </span>
                </div>

                <div className="flex items-center">
                    <span className="text-xs font-medium text-gray-600 sm:text-sm lg:text-base">
                        April 16, 6:00 PM:
                    </span>
                    <span className="ml-2 text-xs text-black sm:text-sm lg:text-base">
                        Grand fireworks & closing celebrations (Vara Loeng Sak) 🎆
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CalendarPage;
