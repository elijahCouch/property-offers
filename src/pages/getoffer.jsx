import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './offer.css';

const App = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [showError, setShowError] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage('Oops, something went wrong. Please contact the site admin.');
        setShowError(true);

        // Automatically clear the error message after 5 seconds
        setTimeout(() => {
            setErrorMessage(null);
            setShowError(false);
        }, 5000);
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
            {showError && (
                <div className="error-container">
                    <div className="error-message">
                        {errorMessage}
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <label>
                    Name*
                    <input type="text" name="name" required />
                </label>
                <br />
                <label>
                    Phone Number*
                    <input type="tel" name="phoneNumber" required />
                </label>
                <br />
                <label>
                    Email*
                    <input type="email" name="email" required />
                </label>
                <br />
                <label>
                    House Address*
                    <input type="text" name="houseAddress" required />
                </label>
                <br />
                <button type="submit">Get an offer</button>
            </form>
        </div>
    );
};

export default App;
