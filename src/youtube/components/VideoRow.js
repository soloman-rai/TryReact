import React from 'react';


import '../assets/VideoRow.css';


const VideoRow = ({ views, subs, description, timestamp, channel, title, image}) => {
    return (
        <div className="videoRow">
            <img src={image} alt={title} />
            <div className="videoRow_text">
                <h3>{title}</h3>
                <p className="videoRow_info">
                    <strong>{channel} | </strong>
                    <span>{subs} Subscribers | </span>
                    <span>{views} views | </span>
                    <span>{timestamp}</span>
                </p>
                <p className="videoRow_description">{description}</p>
            </div>
        </div>
    )
}

export default VideoRow
