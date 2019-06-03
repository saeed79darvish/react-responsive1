import React from 'react'
import FooterX from '../FooterX';
import Team from '../Team/Team';
import CarouselPage from './Carousel';


export default function Home() {
    return (
        <div className="comtainer">
            <CarouselPage />
            <Team />
            <FooterX />
        </div>
    )
}
