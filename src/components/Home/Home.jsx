import React from 'react'
import { Carousel } from 'react-bootstrap';
import Img1 from './back_ground.jpg';
import Img2 from './back_ground1.jpg';
import About from '../About/About.jsx'
import FooterX from '../FooterX';
import Team from '../Team/Team';
import CarouselPage from './Carousel';


export default function Home(props) {
    return (
        <div className="comtainer">
            <CarouselPage/>
            <Team />
            <FooterX />
        </div>
    )
}
