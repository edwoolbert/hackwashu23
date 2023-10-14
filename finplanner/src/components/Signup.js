import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SignUp.css';

function SignUp() {
    return (
        <div className="signup-container">
            <h2 className='signup-title'>Stellar Financial - Sign Up</h2>
            <div className="signup-form">
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button>Sign Up</button>
            </div>
            <div className="login-link">
                <Link to="/login">Already have an account? Log in</Link>
            </div>
        </div>
    );
}

export default SignUp;
