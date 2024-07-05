import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import DeleteConfirm from './DeleteConfirm';

export default function UserCard(props) {
    const { username, numOfPosts, profilePicUrl, handleDelete } = props

    const navigate = useNavigate();

    const handleDetailsClick = () => {
        navigate(`/details/${username}`);
    };

    console.log(profilePicUrl)

    return (
        <Card className='card' sx={{ maxWidth: 345 }}>
            <CardContent className='pb-1'>
                <img src={profilePicUrl} alt={`${username}'s profile pic`} className="profile-pic" />
                <Typography gutterBottom variant="h4" component="div">
                    {username}
                </Typography>
                <Typography gutterBottom variant="h6" color="text.secondary" component="div">
                    Posts: {numOfPosts}
                </Typography>
            </CardContent>
            <CardActions className='pt-0'>
                <Button onClick={() => handleDetailsClick()} size="small">Details</Button>
                <Button size="small">Save</Button>
                <DeleteConfirm size="small" title={username} handleDelete={handleDelete} />
            </CardActions>
        </Card>
    );
}
