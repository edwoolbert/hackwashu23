import React, { useState } from 'react';
import '../styles/UserProfile.css';
import Homebar from './HomeBar';

function UserProfile() {
    const [isEditing, setIsEditing] = useState(false);
    const [userName, setUserName] = useState('John Doe');  // Default value, you can set it from user data
    const userEmail = "johndoe@example.com";  // Static value, you can set it from user data
    const memberSince = "January 2020";  // Static value, you can set it from user data

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleNameChange = (e) => {
        setUserName(e.target.value);
    };

    return (
        <div className="profile-container">
            <Homebar />
            <h1>User Profile</h1>
            <div className="profile-card">
                <div className="avatar-section">
                    <div className="avatar-label">User Avatar</div>
                    <img src="path_to_user_avatar.png" alt="User Avatar" className="avatar" />
                </div>
                <div className="info-section">
                    <label>Name</label>
                    {isEditing ? (
                        <input type="text" value={userName} onChange={handleNameChange} />
                    ) : (
                        <p>{userName}</p>
                    )}
                    <label>Email</label>
                    <p>{userEmail}</p>
                    <label>Member Since</label>
                    <p>{memberSince}</p>
                    <button className="edit-profile-btn" onClick={handleEditToggle}>
                        {isEditing ? 'Save Changes' : 'Edit Profile'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
