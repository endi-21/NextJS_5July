import React, { useState } from 'react';
import UserCard from './UserCard';

const Display = () => {
    const [users, setUsers] = useState([]);

    const handleDeleteUser = (username) => {
        setUsers(users.filter(user => user.username !== username));
    };

    return (
        <div className="display-container">
            <div className="users-container justify-content-center mt-4">
                {users.length > 0 ? users.map((user, index) => (
                    <UserCard
                        key={index}
                        username={user.username}
                        numOfPosts={user.numOfPosts}
                        handleDelete={handleDeleteUser}
                    />
                )) : <h1 style={{ color: 'white' }}>There are no users added</h1>}
            </div>
        </div>
    );
};

export default Display;