import { Link } from 'react-router-dom';
import './question.css';
import man1Image from '../images/man1.jpeg';
import man2Image from '../images/man2.jpeg';
import womenImage from '../images/woman.jpeg';

const App = () => {

    const profileData = [
        { text: "Developer", image: man1Image },
        { text: "Developer", image: man2Image },
        { text: "Designer", image: womenImage },
    ];

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

            <div className="profile-container">
                {profileData.map((item, index) => (
                    <div key={index} className="profile-box">
                        <img src={item.image} alt={item.text} className="profile-image" />
                        <div className="profile-text">{item.text}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
