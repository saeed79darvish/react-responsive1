import React from 'react';
import { Carousel } from 'react-bootstrap';
import Img1 from './background_3d_1.jpg';
import Img2 from './backgroun_3d.jpg';



export default function CarouselPage() {
    return (
        <div >
            <Carousel >
                <Carousel.Item  >
                    <img
                        className="d-block w-100 "
                        src={Img1}
                        alt="First slide"
                    />
                    <Carousel.Caption >
                        <h3>2D to 3D Conversion</h3>
                        <p>AR-view of products from various vendors. Each model is auto-created from a single 2D photo.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img


                        className="d-block w-100"
                        src={Img2}
                        alt="Second slide"

                    />

                    <Carousel.Caption>
                        <h3>Fashion Accessories</h3>
                        <p>Any accessory on the web can be potentially tried on "virtually"!</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    )
}
