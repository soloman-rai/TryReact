import React, { useState, useEffect } from 'react';

import Video from './components/Video';
import './assets/TiktokApp.css';
import { db } from './firebase';


function TiktokApp() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, [posts])

    return (
        <div className="app">
             
            <div className="app_videos">
                {/* {posts.map(
                    ({ url, channel, description, song, likes, comments, shares }) => (
                    <Video
                        url={url}
                        channel={channel}
                        description={description}
                        song={song}
                        likes={likes}
                        comments={comments}
                        shares={shares}
                    />
                ))} */}
                <Video
                    url="https://v16m.tiktokcdn.com/2c992ac8f7397e8a61a4315fc8b8715e/60c69dac/video/tos/alisg/tos-alisg-pve-0037c001/58aba2f0aed34c7e9a3e8096da3bec5b/?a=1233&br=6116&bt=3058&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=2021061318060901023410808915FB1865&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzh0NXhwN3U0NTMzODczM0ApOjM5PDtpOjxmN2k0Omc3OWcuL2NyMi5vMnFgLS1kMTRzc2A2MzIxMzViLy5iNDQzNmI6Yw%3D%3D&vl=&vr="
                    channel="love.eat.repeatt"
                    description="EGG 65 RECIPE 😍. This was so damn good 👌🏽"
                    song="original sound - love.eat.repeatt"
                    likes={1309}
                    comments={376}
                    shares={8141}
                />
                <Video
                    url="https://v16m.tiktokcdn.com/fb66aa8fb7336964852ca757ff50d155/60c69e2e/video/tos/useast2a/tos-useast2a-ve-0068c001/5939b20cbdb2478ba216aed501a32ce7/?a=1233&br=2572&bt=1286&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=2021061318090301023408615811FD43E0&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M25zdXg4anRsNDMzZDczM0ApZDY8Nzo2M2Q8NzQ8MztkPGdqNWQzcnJnMGNgLS0wMTZzcy9hYzFjLzVgNmBeXmIxXzM6Yw%3D%3D&vl=&vr="
                    channel="khaby.lame"
                    description="I love chocolates. 🍫"
                    song="suono originale - Khabane lame"
                    likes={15109}
                    comments={5340}
                    shares={834}
                />
            </div>
        </div>
    )
}

export default TiktokApp
