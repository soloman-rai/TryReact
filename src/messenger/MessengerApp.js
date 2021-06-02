import React, { useEffect, useState, useRef } from 'react';

import MessageForm from './components/MessageForm';
import Message from './components/Message';
import {db} from './firebase';
import FlipMove from 'react-flip-move';



function MessengerApp() {
    //Setting the state using the React hook useState
    const [messages, setMessages] = useState([])
    const [username, setUsername] = useState('')
    const [loaded, setLoaded] = useState(false)
    const bottomRef = useRef();

    const scrollToBottom = () => {
        bottomRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        });
    };


    useEffect(() => {
        // retrieve the existing messages from the database
        db.collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
            // console.log(snapshot.docs.map(doc => doc.data()));
            setMessages(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})))
            setLoaded(true)
        })
    }, [])


    useEffect(() => {
        // run code on a condition 
        const user = prompt('Please enter your name')
        if (user !== ''){
            setUsername(user);
        } else {
            setUsername('anon');
        }
          // opens up a prompt and sets it as username
        // console.log(username)
    }, []) // because the array i.e dependencies here is an empty array, the code runs only once 

    // console.log(messages);

    useEffect(() => {
        scrollToBottom();
    }, [loaded])



    return(
        <>
            <h1>Facebook Messenger Clone ☁️</h1>
            <img src="https://cdn.worldvectorlogo.com/logos/facebook-messenger.svg" height="80px" width="80px" alt="Messenger Logo" />
            {username !== '' ?
                <h2>Welcome {username}</h2>
                :
                ''
            }

            <MessageForm username={username} />

            {username === '' ?
                ''
                :
            <div style={{padding:70, margin:20}}>
                <FlipMove>
                {messages.map(msg => (
                    <Message key={msg.id} message={msg.data} user={username} />
                ))}
                </FlipMove>
            </div>
            }
            <div ref={bottomRef} className="list-bottom"></div>
        </>
    )
}

export default MessengerApp


// useState => basically is a variable in React
    // useEffect => snippet of code that gets executed based on a condition we define
    // useEffect(() => {
    //     console.log('Component Mounted');
    // }, [])

    // useEffect(() => {
    //     console.log('Component Updated..')
    // }, [message])