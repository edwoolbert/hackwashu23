import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomeBar.css';
import { useNavigate } from 'react-router-dom';


function Homebar() {

    const navigate = useNavigate()

    // Placeholder function for logout logic. You might need to add more to this.
    const handleLogout = () => {
        console.log('Logged out!');
        navigate('/login');
    }

    return (
        <div className="homebar-container">
            <div className="navigation-links">
                <Link to="/transactions">Transactions</Link>
                <Link to="/add-transaction">Add Transaction</Link>
                <Link to="/profile">Profile</Link>
            </div>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Homebar;
