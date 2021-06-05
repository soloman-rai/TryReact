import React from 'react';

import Nav from './Nav';
import Product from './Product';
import '../assets/Home.css';


function Home() {
    return (
        <>
            <Nav />
            <img
                className="home_image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Banner Poster" />

            <div className="home_row">
                <Product
                    id="101"
                    title="Airpods Pro"
                    price={35000}
                    rating={5}
                    image="https://freepngimg.com/thumb/tap/79960-headset-white-airpods-technology-headphones-png-free-photo.png"
                />
                <Product
                    id="106"
                    title="High Quality Speakers"
                    price={120000}
                    rating={3}
                    image="https://freepngimg.com/thumb/speakers/22071-7-audio-speakers.png"
                />
            </div>

            <div className="home_row">
                <Product
                    id="103"
                    title="Sony Camera"
                    price={111999}
                    rating={5}
                    image="https://freepngimg.com/thumb/photo%20camera/1-photo-camera-png-image.png"
                />
                <Product
                    id="104"
                    title="Haier TV"
                    price={50000}
                    rating={2}
                    image="https://freepngimg.com/thumb/technology/52646-3-led-television-hd-hq-image-free-png.png"
                />
                <Product 
                    id="105"
                    title="Iphone 5"
                    price={119600}
                    rating={4}
                    image="https://freepngimg.com/thumb/apple_iphone/2-2-apple-iphone-picture.png"
                />
            </div>

            <div className="home_row">  
                <Product
                    id="102"
                    title="Air Conditioner"
                    price={100000}
                    rating={3}
                    image="https://freepngimg.com/thumb/air_conditioner/3-2-ac-free-png-image.png"
                />
            </div>
            
        </>
    )
}

export default Home
