import React , { forwardRef } from 'react'

import {Card, CardContent, Typography} from '@material-ui/core';
import '../assets/Message.css';


// forwardRef is a Higher Order Function
// here all its doing is wrapping what we already have and lettting us use reference i.e. ref


const Message = forwardRef((props, ref) => {
    //check if the message belongs to current user 
    const isUser = props.message.username === props.user

    return (
        <div ref={ref}>

        <Card className={`message ${isUser && 'message_user'}`}>
            <CardContent className={isUser ? "message_userCard" : "message_guestCard"}>
                {/* {!isUser ?} */}
                <code>{props.message.username}: </code>
                <Typography className="messageText" color="textSecondary" gutterBottom>
                {props.message.text}
                </Typography>
            </CardContent>
        </Card>

        </div>
    )
}) 

export default Message
