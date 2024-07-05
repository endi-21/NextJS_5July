import { useParams } from "react-router-dom";

const Details = ({ users }) => {

    let { username } = useParams();

    const user = users.find(user => user.username === username);

    return (

        <div className="text-center mt-4" style={{padding: '0 35rem'}}>
            <img src={user.profilePicUrl} alt="Profile Picture" />
            <h1><span className="make-gray">Username:</span> {user.username}</h1>
            <h2><span className="make-gray">Number of Posts:</span> {user.numOfPosts}</h2>
        </div>

    );
};

export default Details;
