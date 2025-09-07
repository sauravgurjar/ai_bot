import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThinkAIHome from "./features/ThinkAIHome";


function App() {
    return (
        <Router basename="/ai_bot">
            <Routes>
                {/* Home Route */}
                <Route path="/" element={<ThinkAIHome />} />
            </Routes>
        </Router>
    );
}

export default App;
