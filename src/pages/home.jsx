import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './App.css';

const App = () => {
    const [searchValue, setSearchValue] = useState('');
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleSearch = () => {
        alert(`Searching for: ${searchValue}`);
    };

    return (
        <div className="app-container">
            <div className="top-bar">
                <Link to="/" className="top-bar-logo">
                    HOME OFFERS
                </Link>
                <Link to="/get-offer" className="top-bar-button">
                    GET OFFER
                </Link>
                <Link to="/question" className="top-bar-button">
                    EMPLOYEES
                </Link>
            </div>
            <div className="background-image"></div>
            <div className="background-overlay"></div>
            <div className="text-2">
                <p>Hello. We want to buy your home!</p>
            </div>
            <div className="text-1">
                <p>Enter your address and get a price within 24 hours. Yes, it's not that simple.</p>
            </div>
            <div className="search-container" style={{ flexDirection: windowWidth <= 768 ? 'column' : 'row' }}>
                <input
                    type="text"
                    placeholder="Enter your address here"
                    className="search-bar"
                    spellCheck="false"
                    onChange={(e) => setSearchValue(e.target.value)}
                    style={{ width: windowWidth <= 768 ? '100%' : 'auto' }}
                />
                <Link to="/get-offer" className="button">
                    GO
                </Link>
            </div>
        </div>
    );
};

export default App;