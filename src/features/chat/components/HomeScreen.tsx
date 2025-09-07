import React from "react";

interface Props {
    isDarkMode: boolean;
}

const HomeScreen: React.FC<Props> = ({ isDarkMode }) => {
    return (
        <div className="flex-1 flex flex-col items-center justify-center">
            <div className="text-center py-8 px-4 animate-fade-in">
                {/* Glowing Orb */}
                <div className="relative mb-8">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full opacity-70 blur-xl animate-pulse"></div>
                        <div className="relative w-full h-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 rounded-full shadow-2xl"></div>
                    </div>
                </div>

                <h1
                    className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-3 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                    } animate-fade-in-delay-1`}
                >
                    Good evening, Saurav
                </h1>
                <p
                    className={`text-base sm:text-lg ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                    } animate-fade-in-delay-2`}
                >
                    Can I help you with anything?
                </p>
            </div>
        </div>
    );
};

export default HomeScreen;
