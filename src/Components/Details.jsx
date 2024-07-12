import { useParams } from "react-router-dom";

const Details = ({ users }) => {

    let { username } = useParams();

    const user = users.find(user => user.username === username);

    return (

        <div className="text-center mt-4 make-white" style={{padding: '0 35rem'}}>
            <img src={user.profilePicUrl} alt="Profile Picture" />
            <h1>Username: {user.username}</h1>
            <h2>Name: {user.name}</h2>
            <h2>Bio: {user.bio}</h2>
            <h2>Followers: {user.followers}</h2>
            <h2>Following: {user.following}</h2>
            <h2>Number of Posts: {user.numOfPosts}</h2>
        </div>

    );
};

export default Details;
