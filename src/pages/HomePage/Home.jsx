import { Link } from 'react-router-dom';
import '../HomePage/Home.css';
import logo from '../HomePage/CarShare-Logo.png';

function Home() {
    return (
        <div className="home-container">
            <img src={logo} alt="Car Share Logo" className="logo" />
            <h1 className="welcome-message">
                Welcome to Car Share, your number 1 car sharing app!
            </h1>
            <p className="instruction-text">
                Please use one of the following options below:
            </p>
            <div className="button-container">
                <Link to="/login">
                    <button className="home-button">Login</button>
                </Link>
                <Link to="/register">
                    <button className="home-button">Register</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
