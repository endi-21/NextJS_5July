import React, { useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard';

const SearchUser = (props) => {
    const { users, setUsers } = props;


    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        const options = {
            method: 'GET',
            url: `https://instagram243.p.rapidapi.com/userinfo/${username}`,
            headers: {
                'x-rapidapi-key': '9e4ce23415msh7d8fb2d3e558ed7p124c45jsn3bbff691d1ec',
                'x-rapidapi-host': 'instagram243.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            setUserData(response.data)
            setError('');
        } catch (error) {
            setError('User not found');
            setUserData(null);
        }
    };

    const handleSave = (e) => {
        e.preventDefault();

        const newUser = {
            username: username,
            numOfPosts: numOfPosts,
            profilePicUrl: profilePicUrl
        };
        setUsers([...users, newUser]);
        setError('');
        setUsername('');
        setUserData('');
    };


    return (
        <div className="mt-5 text-center search-user-container">
            <input
                type="text"
                placeholder="Enter Instagram username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br/>
            <button className='btn-api' onClick={handleSearch}>Search</button>

            {error && <p className='error'>{error}</p>}

            {userData && (
                <>
                    <div className="d-flex justify-content-center mt-3">
                        <UserCard
                            username={userData.username}
                            numOfPosts={userData.edge_owner_to_timeline_media.count}
                            profilePicUrl={userData.profile_pic_url}
                        />
                    </div>
                    <button className='btn-api' onClick={handleSave}>Save Profile</button>
                </>
            )}
        </div>
    );
};

export default SearchUser;
