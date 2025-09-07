import React from "react";

interface Props {
    isDarkMode: boolean;
    setIsDarkMode: (val: boolean) => void;
}

const TopNav: React.FC<Props> = ({ isDarkMode, setIsDarkMode }) => {
    return (
        <nav className="w-full px-4 sm:px-6 py-4 flex justify-between items-center border-b border-opacity-10 backdrop-blur-sm flex-shrink-0">
            <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">T</span>
                </div>
                <span
                    className={`font-semibold text-lg ${
                        isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                >
          ThinkAI
        </span>
            </div>

            <div className="flex items-center space-x-4">
                <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
                        isDarkMode
                            ? "bg-gray-800 text-gray-300"
                            : "bg-gray-200 text-gray-700"
                    } hover:opacity-80 transition-opacity`}
                >
                    {isDarkMode ? "☀️" : "🌙"}
                </button>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium text-lg">M</span>
                </div>
            </div>

        </nav>
    );
};

export default TopNav;
