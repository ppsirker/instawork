import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddPage.css';  // Import CSS for styling

function AddPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('regular');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://127.0.0.1:8000/api/team-members/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                phone_number: phoneNumber,
                email: email,
                role: role,
            }),
        })
            .then((response) => response.json())
            .then(() => navigate('/'))
            .catch((error) => console.error('Error adding member:', error));
    };

    return (
        <div className="add-page">
            <h1>Add New Member</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="regular">Regular</option>
                    <option value="admin">Admin</option>
                </select>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default AddPage;

