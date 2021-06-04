import React, { useState, useEffect } from 'react'

import '../assets/Post.css';
import {Avatar, Button, FormControl, Input} from '@material-ui/core';
import { db } from '../firebase';
import firebase from 'firebase';
 

function Post(props) {
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')

    useEffect(() => {
        let unsubscribe;
        const postId = props.postId;
        if(postId){
            unsubscribe = db.collection("posts").doc(postId).collection("comments").orderBy('timestamp', 'asc')
                            .onSnapshot((snapshot => {
                                // console.log(snapshot.docs.map((doc) => doc.data()))
                                setComments(snapshot.docs.map((doc) => ({id:doc.id, data:doc.data()})))
                            }));
        } 
        return () => {
            unsubscribe();
        }
    }, [props.postId])


    const postComment = e => {
        e.preventDefault();
        db.collection("posts").doc(props.postId).collection("comments").add({
            text: comment,
            username: props.activeUser, 
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setComment('');
    }

    return (
        <div className="post">
            <div className="post_header">
                <Avatar className="post_avatar" alt={props.username} src="" />
                <h3>{props.username}</h3>
            </div>

            <div className="post_body">
                <img className="post_image" src={props.imageURL} alt="" />
                <h4 className="post_text"><strong>{props.username}</strong> {props.caption}</h4>   
            </div>

            <div className="post_comments">
                {comments.map((comment) => (
                    <p key={comment.id}>
                        <b>{comment.data.username}</b> {comment.data.text}
                    </p>
                ))}
                {props.activeUser === '' ?
                    ''
                    :
                <form className="post_comment_form" onSubmit={postComment}>
                    <FormControl className="post_comment_field">
                        <Input value={comment} onChange={e => setComment(e.target.value)} placeholder="Enter your comment here...." ></Input>
                    </FormControl>
                    <Button type="submit" color="primary" disabled={!comment}>Post</Button>
                </form>
                }
            </div>
        </div>
    )
}

export default Post
