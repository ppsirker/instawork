import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [member, setMember] = useState(null);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/team-members/${id}/`)
            .then((response) => response.json())
            .then((data) => setMember(data))
            .catch((error) => console.error('Error fetching member:', error));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://127.0.0.1:8000/api/team-members/${id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(member),
        })
            .then((response) => response.json())
            .then(() => navigate('/'))
            .catch((error) => console.error('Error updating member:', error));
    };

    const handleDelete = () => {
        fetch(`http://127.0.0.1:8000/api/team-members/${id}/`, {
            method: 'DELETE',
        })
            .then(() => navigate('/'))
            .catch((error) => console.error('Error deleting member:', error));
    };

    if (!member) return <div>Loading...</div>;

    return (
        <div>
            <h1>Edit Member</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={member.first_name}
                    onChange={(e) => setMember({ ...member, first_name: e.target.value })}
                    required
                />
                <input
                    type="text"
                    value={member.last_name}
                    onChange={(e) => setMember({ ...member, last_name: e.target.value })}
                    required
                />
                <input
                    type="text"
                    value={member.phone_number}
                    onChange={(e) => setMember({ ...member, phone_number: e.target.value })}
                    required
                />
                <input
                    type="email"
                    value={member.email}
                    onChange={(e) => setMember({ ...member, email: e.target.value })}
                    required
                />
                <select
                    value={member.role}
                    onChange={(e) => setMember({ ...member, role: e.target.value })}
                >
                    <option value="regular">Regular</option>
                    <option value="admin">Admin</option>
                </select>
                <button type="submit">Save</button>
            </form>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default EditPage;

