import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function LoginPage() {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });
    const [loginStatus, setLoginStatus] = useState('');
 
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
 
    const handleSubmit = async (event) => {
        event.preventDefault();
        navigate('/userhome');

       /* try { 
            const response = await axios.post('/group19-capstone-project/user/login', loginData);
 
            setLoginStatus('Login successful!');
            console.log(response.data);
 
        } catch (error) { 
            setLoginStatus('Login failed. Please try again.');
            console.error('There was an error logging in:', error);
        } */
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-form">
                    <h2>Login into your account</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={loginData.username}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={loginData.password}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="forgot-password">
                            <a href="#">Forgot password?</a>
                        </div>
                        <button type="submit" className="login-btn">Login now</button>
                    </form>
                    {loginStatus && <p>{loginStatus}</p>}
                    <div className="register-option">
                        <span>OR</span>
                        <a href="/register">
                            <button type="button" className="register-btn">Register now</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
