import React from 'react'
import "./Home.css";
import Product from './Product';
function Home() {
    return (
        <div className="home">
                <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
                />
             <div className="home__row">   
                <Product
                id="12345"
                title="rich dad poor dad"
                price={11.5}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51wOOMQ+F3L._SX312_BO1,204,203,200_.jpg"
                />
                <Product
                id="12346"
                title=" Airdopes 441"
                price={20.5}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/61rlb0IYNuL._SL1500_.jpg"
                />
                <Product
                id="12347"
                title="Pigeon by Stovekraft New Handy Mini Plastic Chopper with 3 Blades, Green"
                price={15}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/5144tlFo%2B5L._SL1080_.jpg"
                />
                <Product
                id="12348"
                title="Samsung Galaxy M31s (Mirage Blue, 8GB RAM, 128GB Storage) - Get Rs 1,000 Amazon Pay cashback on prepaid orders. Limited Period offer"
                price={30}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/61d-phh4GfL._SL1500_.jpg"
                />
                

             </div>
             <div className="home__row">   
          
                <Product
                id="12349"
                title=" PowerMax Fitness® TDM-100M (2.0HP) Motorized Foldable, Electric Treadmill"
                price={20.5}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/813dvRVB0XL._SL1500_.jpg"
                />
                <Product
                id="123410"
                title="Story@Home Candy 120 TC Cotton Double Bed Sheet with 2 Pillow Covers"
                price={15}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/81WqOTDRLWL._SL1500_.jpg"
                />
                <Product
                id="12311"
                title="SanDisk Cruzer Blade 32GB USB Flash Drive"
                price={30}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/61pHXsALAOL._SL1206_.jpg"
                />
                

             </div>   
   
        </div>
    )
}

export default Home
