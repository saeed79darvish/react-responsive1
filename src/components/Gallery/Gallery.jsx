

import React from "react";
import { MDBContainer, MDBIframe } from "mdbreact";
const Gallery = () => {
    return (
        <div>
            <MDBContainer className="text-center mt-3 sz-2">
                <MDBIframe src="https://www.youtube.com/embed/Bqa88JsYJTU" />
            </MDBContainer>
            <MDBContainer className="text-center mt-3">
                <MDBIframe src="https://www.youtube.com/embed/Bqa88JsYJTU" />
            </MDBContainer>
            <MDBContainer className="text-center mt-3">
                <MDBIframe src="https://www.youtube.com/embed/Bqa88JsYJTU" />
            </MDBContainer>
        </div>
    );
}

export default Gallery;
