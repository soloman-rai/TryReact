import React from 'react';

import '../assets/ChatList.css';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';


// A sub component for the Chats component
function ChatRow({name, message, profilePic, timestamp}) {
    return (
        <div className="chatRow">
            <div className="chatRow_container">
                <Avatar className="chatRow_image" alt={name} src={profilePic} />   
                <div className="chatRow_info">
                    <h3>{name}</h3>
                    <p>{message}</p>
                </div>
                <p className="chatRow_timestamp">🕧 {timestamp}</p>
            </div>     
        </div>
    )
}

const Chats = () => {

    return (
        <div className="chats">
            <Link className="chats_link" to="chat/sarah">
            <ChatRow
                name="Sarah"
                message="Hey! How are ya ?"
                timestamp="35 minutes ago"
                profilePic="https://image.freepik.com/free-photo/young-beautiful-woman-looking-camera-trendy-girl-casual-summer-white-t-shirt-jeans-shorts-positive-female-shows-facial-emotions-funny-model-isolated-yellow_158538-15796.jpg"
            />
            </Link>

            <ChatRow
                name="Candace"
                message="Hey! How are ya ?"
                timestamp="35 minutes ago"
                profilePic="https://image.freepik.com/free-photo/beautiful-sensual-woman-touching-her-face-isolated-white-wall-beauty-skincare-concept-spa_231208-1467.jpg"
            />
        </div>
    )
}

export default Chats
