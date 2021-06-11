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
                image="https://images.unsplash.com/photo-1462965326201-d02e4f455804?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" />
            <VideoCard
                title="Everything you need to know about SPEED RAMPING | Premiere Pro"
                views="230K views"
                timestamp="3 days ago"
                channel_image="https://yt3.ggpht.com/qkY3Mg0DMG0xwRRRG1JWB27n7fq65ESSlZjEa9Faj5FZk0geM1bshDb0o97zKu0-LFTYDGP6FQ=s68-c-k-c0x00ffffff-no-rj"
                channel="Ajay Thapa Magar"
                    image="https://images.unsplash.com/photo-1598654478409-684ac5e410a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" />
            <VideoCard
                title="WWDC Event 2021"
                views="3.3M views"
                timestamp="5 days ago"
                channel_image="https://yt3.ggpht.com/ytc/AAUvwnjMQg0vNJYMPsEA4X60Oqgj6A_ko4cLP0duHRG0cA=s68-c-k-c0x00ffffff-no-rj"
                channel="Apple"
                    image="https://images.unsplash.com/photo-1593076819667-745edc34bb40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1406&q=80" />
            <VideoCard
                title="Tere Hi Hum - Prateek Kuhad"
                views="1.3M views"
                timestamp="3 years ago"
                channel_image="https://yt3.ggpht.com/y2rHitQl_jqixivqz7IUoRkSzJts4JdGl75IQABw8FIQndaeFTorMDkdEnUpKX0FHjbm9ku6=s88-c-k-c0x00ffffff-no-rj"
                channel="Prateek Kuhad"
                    image="https://images.unsplash.com/photo-1439436556258-1f7fab1bfd4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" />
            <VideoCard
                title="Fake Amazing Guitar Solos"
                views="2.3M views"
                timestamp="3 months ago"
                channel_image="https://yt3.ggpht.com/ytc/AAUvwniLfTgRIk62oGFEzy197OhnpJFnWn9-dCo7Wv5Xlg=s68-c-k-c0x00ffffff-no-rj"
                channel="Abbey Mave"
                    image="https://images.unsplash.com/photo-1474959783111-a0f551bdad25?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" />
            <VideoCard
                title="Lofi Chill Beats to Code Listening to"
                views="3.3M views"
                timestamp="1 week ago"
                channel_image="https://yt3.ggpht.com/ytc/AAUvwni1vB7aeq1m9gYm2Hiz7_lUfB2r7h_vTwg04m2f=s68-c-k-c0x00ffffff-no-rj"
                channel="Lofi Land"
                    image="https://images.unsplash.com/photo-1558304970-abd589baebe5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80" />
            </div>
        </div>
    )
}

export default RecommendedVideos
