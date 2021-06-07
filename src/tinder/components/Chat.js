import React, { useState } from 'react';

import '../assets/Chat.css';
import { Avatar } from '@material-ui/core';


const Chat = () => {
    const [message, setMessage] = useState('');

    const [messages, setMessages] = useState([
        {
            id: '1',
            name: 'Sarah',
            image: 'https://image.freepik.com/free-photo/beautiful-sensual-woman-touching-her-face-isolated-white-wall-beauty-skincare-concept-spa_231208-1467.jpg',
            message: 'hello'
        },
        {
            id: '2',
            name: 'Sarah',
            image: 'https://image.freepik.com/free-photo/beautiful-sensual-woman-touching-her-face-isolated-white-wall-beauty-skincare-concept-spa_231208-1467.jpg',
            message: 'hows it going? 💚'
        },
        {
            id: '3',
            name: 'Sam',
            image: 'https://image.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
            message: 'hello Sarah'
        },

    ]);

    const handleSendMessage = e => {
        e.preventDefault();
        const msg_count = messages.length + 1;
        // console.log(msg_count);
        setMessages([...messages, {
            id: `${msg_count}`,
            name: 'Sam',
            image: 'https://image.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
            message: message
        }])
        setMessage('');
    }

    return (
        <div className="chat">
            <p className="chat_timestamp">YOU MATCHED WITH <strong>SARAH</strong> ON 05/18/2021</p>
            {messages.map(msg => (
                msg.name === 'Sarah' ?
                    <div key={msg.id} className="chat_message">
                        <Avatar
                            className="chat_message_avatar"
                            alt={msg.name}
                            src={msg.image}
                        />
                        <p className="chat_messsage_text">{msg.message}</p>
                    </div>
                    :
                    <div key={msg.id} className="chat_message">
                        <p className="chat_messsage_textUser">{msg.message}</p>
                    </div>
            ))}

            <div>
                <form className="chat_form" onSubmit={handleSendMessage}>
                    <input
                        value={message} onChange={e => setMessage(e.target.value)}
                        className="chat_form_input" type="text" placeholder="Type your message" required/>
                    <button className="chat_form_button" type="submit">SEND</button>
                </form>
            </div>
        </div>
    )
}

export default Chat
