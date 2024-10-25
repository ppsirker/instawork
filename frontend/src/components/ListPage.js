import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ListPage.css'; 

function ListPage() {
    const [members, setMembers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/team-members/')
            .then((response) => response.json())
            .then((data) => setMembers(data))
            .catch((error) => console.error('Error fetching team members:', error));
    }, []);

    return (
        <div className="list-page">
            <h1>Team Members ({members.length})</h1>
            <button className="add-button" onClick={() => navigate('/add')}>Add Member</button>
            <ul className="team-list">
                {members.map((member) => (
                    <li key={member.id} className="team-member" onClick={() => navigate(`/edit/${member.id}`)}>
                        {member.first_name} {member.last_name} ({member.role})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListPage;

