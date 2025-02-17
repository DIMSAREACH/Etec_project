import React from "react";

const HomePage = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
            {/* Right Side - Content */}
            <div className="w-full h-screen md:w-1/2 flex flex-col items-center justify-center p-8 md:text-left">
                <h1 className="w-full text-center text-4xl font-bold mb-4 sm:text-5xl md:text-6xl lg:text-7xl 
                    bg-white text-transparent bg-clip-text bg-gradient-to-r py-2 px-4 pt-5">
                    Welcome to My Website, Reaksa!
                </h1>
                <p className="text-lg mb-6 sm:text-xl md:text-2xl text-white font-serif">
                    Your journey starts here.
                </p>
                <p className="text-lg mb-6 sm:text-xl md:text-2xl text-white  ">
                    I'm glad to have you here. Explore and enjoy your stay!
                </p>
                <button className="bg-amber-50 text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-amber-100 transition-all duration-300 shadow-lg cursor-pointer">
                    Get Started
                </button>
            </div>

            {/* Left Side - Image */}
            <div className="w-full h-screen md:w-1/2 md:h-screen bg-cover bg-center rounded-xl  ring-cyan-900" 
                style={{ backgroundImage: "url('/src/assets/reaksa.png')" }}>
            </div>
        </div>
    );
};

export default HomePage;
