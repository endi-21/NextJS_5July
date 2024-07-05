import React, { useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard';

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

const SearchUser = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        const options = {
            method: 'GET',
            url: `https://instagram243.p.rapidapi.com/userinfo/${username}`,
            headers: {
                'x-rapidapi-key': '9c9ea6935dmsh6df8038c4215f8ap10e703jsn6f2883cbf9e7',
                'x-rapidapi-host': 'instagram243.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            const data = response.data.data;
            const proxiedProfilePicUrl = `${CORS_PROXY}${data.profile_pic_url}`;
            setUserData({ ...data, profile_pic_url: proxiedProfilePicUrl });
            setError('');
        } catch (error) {
            setError('User not found');
            setUserData(null);
        }
    };

    return (
        <div className="mt-4 text-center search-user-container">
            <input
                type="text"
                placeholder="Enter Instagram username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br/>
            <button onClick={handleSearch}>Search</button>

            {error && <p className='error'>{error}</p>}

            {userData && (
                <div className="d-flex justify-content-center mt-3">
                    <UserCard
                    username={userData.username}
                    numOfPosts={userData.edge_owner_to_timeline_media.count}
                    profilePicUrl={userData.profile_pic_url}
                    handleDelete={() => { /* Implement delete functionality if needed */ }}
                />
                </div>
                
            )}
        </div>
    );
};

export default SearchUser;
