import React from 'react';

import '../assets/SearchResults.css';
import TuneIcon from '@material-ui/icons/Tune';
import { Avatar } from '@material-ui/core';
import { useParams } from 'react-router';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import VideoRow from './VideoRow';


function ChannelRow({ image, channel, verified, subs, noOfVideos, description }) {
    let { searchTerm } = useParams();

    return (
        <div className="channelRow">
            <Avatar className="channelRow_logo"
                alt={channel} src={image}
            />
            <div className="channelRow_text">
                <h4>{searchTerm} {verified && <CheckCircleOutlineIcon />}</h4>
                <p>{subs} subscribers | {noOfVideos} videos</p>
                <p>{description}</p>
            </div>
        </div>
    )
}


const SearchResults = () => {
    let { searchTerm } = useParams();

    return (
        <div className="searchResults">
            <div className="searchResults_filter">
                <TuneIcon />
                <h3>FILTER</h3>
            </div>
            <hr />
            <ChannelRow
                image="https://i.ytimg.com/vi/Ct-nyAfy66c/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBUMlGPOE0tCVxt8rCi7aeXANSaag"
                channel=""
                verified
                subs="100K"
                noOfVideos={320}
                description="The term YouTube description refers to the text that a content creator supplies to describe their content, making it easy for YouTube to categorize and serve that content to users who are searching for it."
            />
            <hr />
            
            <VideoRow
                views="1.4K"
                subs="659K"
                description="The term YouTube description refers to the text that a content creator supplies to describe their content."
                title="This AUDIO INTERFACE Setup ACTUALLY Made Me CRY | EVO 4"
                timestamp="59 minutes ago"
                channel={searchTerm}
                image="https://i.ytimg.com/an_webp/UkfrCSqViB4/mqdefault_6s.webp?du=3000&sqp=CPT2iIYG&rs=AOn4CLCN6m39CRAej3AZ2NyQJAGV3D--NQ"
            />

            <VideoRow
                views="510K"
                subs="6M"
                description="Learn the EXACT steps you need to take to use the piano sustain pedal correctly and use this SIMPLE exercise to get started and ..."
                title="Sustain Pedal - How to use it - Piano Lesson"
                timestamp="1 year ago"
                channel={searchTerm}
                image="https://i.ytimg.com/an_webp/YYXbMgecD0w/mqdefault_6s.webp?du=3000&sqp=CKD4iIYG&rs=AOn4CLAmMP1mr9YZuaoGZX6wMkThDbAbgg"
            />

            <VideoRow
                views="1.1M"
                subs="965K"
                description="This is level 1 in the ear training exercise series. Hope you enjoy."
                title="Ear Training Exercise - Level 1"
                timestamp="10 weeks ago"
                channel={searchTerm}
                image="https://i.ytimg.com/an_webp/EazFLAA-Pog/mqdefault_6s.webp?du=3000&sqp=CKjkiIYG&rs=AOn4CLCjJwYxFVqn0xZImNaMx52lPlDjFw"
            />

            <VideoRow
                views="452K"
                subs="965K"
                description="This video of @Yebba singing Bridge Over Troubled Water has long been a favourite of mine, so I thought I'd harmonise it for a bit ..."
                title="Jacob Collier & YEBBA - Bridge Over Troubled Water"
                timestamp="2 months ago"
                channel={searchTerm}
                image="https://i.ytimg.com/an_webp/y9RUgsD8dRY/mqdefault_6s.webp?du=3000&sqp=CIz9iIYG&rs=AOn4CLBCJm5C66zVDaBJti7KBUwVFhwjWQ"
            />


        </div>
    )
}

export default SearchResults
