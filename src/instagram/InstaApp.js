import React, {useState, useEffect} from 'react'

import './assets/InstaApp.css';
import Post from './components/Post';
import { db } from './firebase';
import Modal from './components/Modal';
import ImageUpload from './components/ImageUpload';

function InstaApp() {
    const [posts, setPosts] = useState([
        // {
        //     username: "qazi ❓",
        //     caption: "It works 💛", 
        //     imageURL: "https://www.everplans.com/sites/default/files/instagram-logo-main.jpg"
        // }, {
        //     username: "sunny 🌞",
        //     caption: "Whatever 🤷‍♂️",
        //     imageURL: "https://images.unsplash.com/photo-1593643946890-b5b85ade6451?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2729&q=80"
        // }
    ])

    const [activeUser, setActiveUser] = useState('')

    function updateActiveUser(username){
        setActiveUser(username)
    }

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            // console.log()
            setPosts(snapshot.docs.map(doc => ({id: doc.id, data:doc.data()})))
        })
    }, [])

    return (
        <div className="app">

            <div className="app_header">
                <div className="app_headerImg">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png"
                    height="60px" alt="IG Logo" />  
                </div>

                <div className="app_headerModal">
                    {/* Login / Signup Modal */}
                    <Modal onChange={updateActiveUser} />
                </div>

                
                {activeUser !== '' ?
                    <ImageUpload user={activeUser} />
                    :
                    ''
                }
            </div>

            <div>
                <center>
                {activeUser !== '' ? 
                    <>
                    <h2>Hello {activeUser} 👋</h2>
                    <code>🗒️ Image sizes should be less than 2 MB.</code>
                    </>
                    :
                    <p><code>Welcome to Instagram Clone 📷</code></p>
                }
                </center>
            </div>

            <div className="app_body">

                {posts.map(post => (
                    <Post key={post.id} postId={post.id} username={post.data.username} caption={post.data.caption} imageURL={post.data.imageURL} activeUser={activeUser} />
                ))}

            </div>

            <div className="mb"></div>

        </div>
    )
}

export default InstaApp
