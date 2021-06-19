import React, { useState } from 'react';

import '../assets/VideoSidebar.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';


const VideoSidebar = ({ likes, comments, shares }) => {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
    }

    return (
        <div className="videoSidebar">
            <div className="videoSidebar_button">
                {liked ?
                    <FavoriteIcon fontSize="large" onClick={toggleLike} />
                    :
                    <FavoriteBorderIcon fontSize="large" onClick={toggleLike} />
                }
                
                <span>{liked ? likes +1 : likes}</span>
            </div>
            <div className="videoSidebar_button">
                <CommentIcon fontSize="large" />
                <span>{comments}</span>
            </div>
            <div className="videoSidebar_button">
                <ShareIcon fontSize="large" />
                 <span>{shares}</span>
            </div>
        </div>
    )
}

export default VideoSidebar
