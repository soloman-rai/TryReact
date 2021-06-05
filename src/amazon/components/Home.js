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
                    image="http://www.pngmart.com/files/13/Airpods-PNG-Background-Image.png"
                />
                <Product
                    id="106"
                    title="High Quality Speakers"
                    price={120000}
                    rating={3}
                    image="http://www.pngmart.com/files/6/Computer-Speakers-PNG-Picture.png"
                />
            </div>

            <div className="home_row">
                <Product
                    id="103"
                    title="Sony Camera"
                    price={111999}
                    rating={5}
                    image="http://www.pngmart.com/files/2/Sony-Digital-Camera-Transparent-Background.png"
                />
                <Product
                    id="104"
                    title="Haier TV"
                    price={50000}
                    rating={2}
                    image="http://www.pngmart.com/files/1/Haier-TV-PNG.png"
                />
                <Product 
                    id="105"
                    title="Iphone 12"
                    price={119600}
                    rating={4}
                    image="http://www.pngmart.com/files/15/Apple-iPhone-12-Transparent-PNG.png"
                />
            </div>

            <div className="home_row">  
                <Product
                    id="102"
                    title="Air Conditioner"
                    price={100000}
                    rating={3}
                    image="http://www.pngmart.com/files/7/Air-Conditioner-PNG-Photos.png"
                />
            </div>
            
        </>
    )
}

export default Home
