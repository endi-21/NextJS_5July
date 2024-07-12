import React, { useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import { useNavigate } from 'react-router-dom';


const SearchUser = ({ users, setUsers }) => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const handleSearch = async () => {
        const options = {
            method: 'GET',
            url: `https://instagram243.p.rapidapi.com/userinfo/${username}`,
            headers: {
                'x-rapidapi-key': '840b3ca07cmsh966420a47f5695cp18a5a4jsn894243c252d9',
                'x-rapidapi-host': 'instagram243.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            setUserData(response.data.data);
            setError('');
        } catch (error) {
            setError('User not found');
            setUserData(null);
        }
    };

    const handleSave = (e) => {
        e.preventDefault();

        const newUser = {
            username: userData.username,
            name: userData.full_name,
            bio: userData.biography,
            numOfPosts: userData.edge_owner_to_timeline_media.count,
            profilePicUrl: userData.profile_pic_url,
            followers: userData.edge_followed_by.count,
            following: userData.edge_follow.count
        };
        setUsers([...users, newUser]);
        setError('');
        setUsername('');
        setUserData(null);
        navigate(`/`);
    };

    return (
        <div className="mt-5 text-center search-user-container">
            <input
                type="text"
                placeholder="Enter Instagram username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br />
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
