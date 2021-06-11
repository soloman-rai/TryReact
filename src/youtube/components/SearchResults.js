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
                image="https://images.unsplash.com/photo-1569050937856-f2a05c0ab6f9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80"
            />

            <VideoRow
                views="510K"
                subs="6M"
                description="Learn the EXACT steps you need to take to use the piano sustain pedal correctly and use this SIMPLE exercise to get started and ..."
                title="Pedal borad - How to use it - Guita Pedals Guidelines"
                timestamp="1 year ago"
                channel={searchTerm}
                image="https://images.unsplash.com/photo-1494097867382-c2534fc135dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
            />

            <VideoRow
                views="1.1M"
                subs="965K"
                description="This is level 1 in the ear training exercise series. Hope you enjoy."
                title="Ear Training Exercise - Level 1"
                timestamp="10 weeks ago"
                channel={searchTerm}
                image="https://images.unsplash.com/photo-1577205311375-4879d071d3d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
            />

            <VideoRow
                views="452K"
                subs="965K"
                description="This video of @Yebba singing Bridge Over Troubled Water has long been a favourite of mine, so I thought I'd harmonise it for a bit ..."
                title="Jacob Collier & YEBBA - Bridge Over Troubled Water"
                timestamp="2 months ago"
                channel={searchTerm}
                image="https://images.unsplash.com/photo-1543510616-a4025b9c1434?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
            />


        </div>
    )
}

export default SearchResults
