import React from 'react';

import '../assets/RecommendedVideos.css';
import VideoCard from './VideoCard';


const RecommendedVideos = () => {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos_list">
            <VideoCard
                title="Video 101: Watch this immediately"
                views="2.3M views"
                timestamp="3 days ago"
                channel_image="https://birdsofnepal.files.wordpress.com/2017/04/img_5747.jpg?w=1020&h=&zoom=2"
                channel="Bakulla"
                image="https://birdsofnepal.files.wordpress.com/2017/04/img_5706.jpg?w=2048&h=&zoom=2" />
            <VideoCard
                title="Worship Session - 10/06/21"
                views="1.1M views"
                timestamp="1 hour ago"
                channel_image="https://yt3.ggpht.com/ytc/AAUvwnjdhHBLkUDZjaaulm5Rs_s3JFNIisyxAoRqVTofBQ=s88-c-k-c0x00ffffff-no-rj"
                channel="Jonathan Ogden"
                image="https://i.ytimg.com/vi/tIh1csIU9QU/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3Gjd-dWMD6pHltus_RPgH3tC8-g" />
            <VideoCard
                title="Everything you need to know about SPEED RAMPING | Premiere Pro"
                views="230K views"
                timestamp="3 days ago"
                channel_image="https://yt3.ggpht.com/qkY3Mg0DMG0xwRRRG1JWB27n7fq65ESSlZjEa9Faj5FZk0geM1bshDb0o97zKu0-LFTYDGP6FQ=s68-c-k-c0x00ffffff-no-rj"
                channel="Ajay Thapa Magar"
                    image="https://i.ytimg.com/vi/oQDVgC1lP3o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDygkaNE0s7jFu5EDnIwdmh1Rl-DA" />
            <VideoCard
                title="WWDC Event 2021"
                views="3.3M views"
                timestamp="5 days ago"
                channel_image="https://yt3.ggpht.com/ytc/AAUvwnjMQg0vNJYMPsEA4X60Oqgj6A_ko4cLP0duHRG0cA=s68-c-k-c0x00ffffff-no-rj"
                channel="Apple"
                    image="https://i.ytimg.com/an_webp/N6HjjjNqJUg/mqdefault_6s.webp?du=3000&sqp=CKjDiIYG&rs=AOn4CLDO8uiz-b1qR0ug0v_7NOy8oM7NYA" />
            <VideoCard
                title="Tere Hi Hum - Prateek Kuhad"
                views="1.3M views"
                timestamp="3 years ago"
                channel_image="https://yt3.ggpht.com/y2rHitQl_jqixivqz7IUoRkSzJts4JdGl75IQABw8FIQndaeFTorMDkdEnUpKX0FHjbm9ku6=s88-c-k-c0x00ffffff-no-rj"
                channel="Prateek Kuhad"
                    image="https://i.ytimg.com/vi/cTwsW54rM3A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNAVM0N_wsE2331oETUj6wgOrTkA" />
            <VideoCard
                title="Fake Amazing Guitar Solos"
                views="2.3M views"
                timestamp="3 months ago"
                channel_image="https://yt3.ggpht.com/ytc/AAUvwniLfTgRIk62oGFEzy197OhnpJFnWn9-dCo7Wv5Xlg=s68-c-k-c0x00ffffff-no-rj"
                channel="Abbey Mave"
                    image="https://i.ytimg.com/an_webp/C3f0HC0-J10/mqdefault_6s.webp?du=3000&sqp=CNy3iIYG&rs=AOn4CLDi4fwQovD5Cg3EzcetJrvcJXhGEg" />
            <VideoCard
                title="Lofi Chill Beats to Code Listening to"
                views="3.3M views"
                timestamp="1 week ago"
                channel_image="https://yt3.ggpht.com/ytc/AAUvwni1vB7aeq1m9gYm2Hiz7_lUfB2r7h_vTwg04m2f=s68-c-k-c0x00ffffff-no-rj"
                channel="Lofi Ifol"
                    image="https://i.ytimg.com/an_webp/f02mOEt11OQ/mqdefault_6s.webp?du=3000&sqp=CMCGiIYG&rs=AOn4CLC7Yzg4mMODilzgxJXGtGlogITlWg" />
            </div>
        </div>
    )
}

export default RecommendedVideos
