import React, { useRef, useState } from 'react';

import '../assets/Video.css';
import VideoFooter from '../components/VideoFooter';
import VideoSidebar from '../components/VideoSidebar';


const Video = ({ url, channel, description, song, likes, comments, shares }) => {
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null);

    const onVideoClick = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    }

    return (
        <div className="video">
            <video
                className="video_player"
                loop
                onClick={onVideoClick}
                ref={videoRef}
                src={url}>

            </video>
            <VideoFooter channel={channel} description={description} song={song} />
            <VideoSidebar likes={likes} comments={comments} shares={shares} />
        </div>
    )
}

export default Video
