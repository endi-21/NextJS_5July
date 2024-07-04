import React, { useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard';

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
      setUserData(response.data);
      setError('');
    } catch (error) {
      setError('User not found');
      setUserData(null);
    }
  };

  return (
    <div className="search-user-container">
      <input
        type="text"
        placeholder="Enter Instagram username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p>{error}</p>}

      {userData && (
        <UserCard
          username={userData.username}
          numOfPosts={userData.posts}
          handleDelete={() => {}}
        />
      )}
    </div>
  );
};

export default SearchUser;
