import React from 'react';

import '../assets/VideoFooter.css';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';


const VideoFooter = ({ channel, description, song }) => {
    return (
        <div className="videoFooter">
            <div className="videoFooter_text">
                <span><strong>@{channel}</strong></span> 
                <span>{description}</span>
                <div className="videoFooter_ticker">
                    <MusicNoteIcon className="videoFooter_icon" />
                    <Ticker mode="smooth">
                        {({ index }) => (
                            <>
                                <span>{song}</span>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <img className="videoFooter_image" src="https://static.thenounproject.com/png/934821-200.png" alt="Music Record" />
        </div>
    )
}

export default VideoFooter
