import React from 'react'
import FooterX from '../FooterX';
import CarouselPage from './Carousel';
import Products from '../Products/Products';
import Gallery from '../Gallery/Gallery';


export default function Home() {
    return (
        <div className="comtainer">
            <CarouselPage />
            <Products/>
            <Gallery/>
            <FooterX />
        </div>
    )
}
