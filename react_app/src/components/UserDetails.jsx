import React, { useState } from 'react';
import UserDetailsApi from './UserDetailsApi';

const UserDetails = () => {
    const [users, setUsers] = useState([
        { id: 1, name: "Sachin", email: "sachin@123" },
        { id: 2, name: "Virat", email: "virat@123" },
        { id: 3, name: "Rohit", email: "rohit@123" }
    ]);

    return (
        <div>
            <h2>Fetching the Cricketers</h2>
            <div>
                {users.map(user => (
                    <UserDetailsApi key={user.id} user={user} setusers={setUsers} />
                ))}
            </div>
        </div>
    );
};

export default UserDetails;
