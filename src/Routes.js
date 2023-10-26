import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Getoffer from './pages/getoffer';
import Question from './pages/question';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/get-offer" element={<Getoffer />} />
                <Route path="/question" element={<Question />} />
            </Routes>
        </Router>
    );
};

export default App;