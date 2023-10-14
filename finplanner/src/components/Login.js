import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Here, you'd typically validate the user's credentials. 
        // Once validated, redirect them to the transactions page.
        navigate("/transactions")
    };

    return (
        <div className="login-container">
            <h2 className='login-title'>Stellar Financial</h2>
            <div className="login-form">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button onClick={handleLogin}>Login</button>
            </div>
            <div className="signup-link">
                <Link to="/signup">Don't have an account? Sign up</Link>
            </div>
        </div>
    );
}

export default Login;
