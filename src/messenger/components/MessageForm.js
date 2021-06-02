import React, {useState} from 'react'

import {Input, FormControl, InputLabel} from '@material-ui/core';
import firebase from 'firebase';
import {db} from '../firebase';
import '../assets/Message.css';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';


function MessageForm(props) {
    //Setting the state using the React hook useState
    const [message, setMessage] = useState({username: '', text: ''})

    const sendMessage = e => {
        e.preventDefault();
        // logic to send message
        const msg = {
            username: message.username,
            text: message.text,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }
        db.collection('messages').add(msg)
        // setMessages([...messages, msg])
        setMessage({username: '', text: ''})     
    }

    return (
        <>
            <form onSubmit={sendMessage} className="msgForm">
                <FormControl className="formControl">
                <InputLabel>Enter your message</InputLabel>
                <Input className="msgInput" value={message.text} onChange={e => setMessage({username: props.username, text: e.target.value})} />
                <IconButton className="sendButton" variant="outlined" color="primary" type="submit" disabled={!message.text}><SendIcon /></IconButton>
                </FormControl>
            </form>
        </>
    )
}

export default MessageForm
