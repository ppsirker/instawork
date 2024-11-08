import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddPage.css';

function AddPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('regular');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Client-side phone number validation
        const phoneRegex = /^(?:\(\d{3}\)\s?|\d{3}-?)\d{3}-?\d{4}$/;
        if (!phoneRegex.test(phoneNumber)) {
            setError({ phone_number: "Phone number must be in the format 123-456-7890, (123) 456-7890, or 1234567890." });
            return;
        }

        // Client-side email validation
        const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!emailRegex.test(email)) {
            setError({ email: "Invalid email format." });
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:8000/api/team-members/', {
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
            });

            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData);
            } else {
                setError(null);
                navigate('/');
            }
        } catch (error) {
            console.error("Error adding member:", error);
            setError({ detail: "An error occurred while adding the member." });
        }
    };

    return (
        <div className="add-page">
            <h1>Add New Member</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="regular">Regular</option>
                    <option value="admin">Admin</option>
                </select>
                <button type="submit">Save</button>
            </form>
            {error && (
                <div className="error-message">
                    {error.email && <p>{error.email}</p>}
                    {error.phone_number && <p>{error.phone_number}</p>}
                    {error.detail && <p>{error.detail}</p>}
                </div>
            )}
        </div>
    );
}

export default AddPage;

