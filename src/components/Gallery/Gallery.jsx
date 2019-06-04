import React from "react";
import { MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask, MDBContainer, MDBIframe } from "mdbreact";

const Gallery = () => {
    return (
        <section className="text-center my-5  ">
            <h1 className="h1-responsive font-weight-bold my-5">
                Gallery
        </h1>
            <p className="grey-text w-responsive mx-auto mb-5 p-3">

            </p>

            <MDBRow className="d-flex justify-content-center">
                <MDBCol md="6" xl="5" className="mb-4">
                    <MDBView className="overlay rounded z-depth-2" waves>
                        <MDBContainer className="text-center mt-3 sz-2">
                            <MDBIframe src="https://www.youtube.com/embed/bTHMg0d4lZY" />
                        </MDBContainer>

                    </MDBView>
                    <MDBCardBody className="pb-0">

                        <h4 className="font-weight-bold mb-3">2D to 3D Conversion</h4>
                        <p>
                            AR-view of products from various vendors. Each model is auto-created from a single 2D photo.
              </p>

                    </MDBCardBody>
                </MDBCol>
                <MDBCol md="6" xl="5" className="mb-4">
                    <MDBView className="overlay rounded z-depth-2" waves>
                        <MDBContainer className="text-center mt-3 sz-2">
                            <MDBIframe src="https://www.youtube.com/embed/dsU-fozxlf0" />
                        </MDBContainer>
                        <a href="#!">
                            <MDBMask overlay="white-slight" />
                        </a>
                    </MDBView>
                    <MDBCardBody className="pb-0">
                        <a href="#!" className="blue-text">

                        </a>
                        <h4 className="font-weight-bold mb-3">Seamless Integration into Mobile Web</h4>
                        <p>
                            In-browser AR-preview of our auto-generated models using with WebXR on both iOS and Andrioid. No app or code changes required!
              </p>

                    </MDBCardBody>
                </MDBCol>
                <MDBCol md="6" xl="5" className="mb-4">
                    <MDBView className="overlay rounded z-depth-2" waves>
                        <MDBContainer className="text-center mt-3 sz-2">
                            <MDBIframe src="https://www.youtube.com/embed/Bqa88JsYJTU" />
                        </MDBContainer>
                        <a href="#!">
                            <MDBMask overlay="white-slight" />
                        </a>
                    </MDBView>
                    <MDBCardBody className="pb-0">
                        <a href="#!" className="brown-text">

                        </a>
                        <h4 className="font-weight-bold mb-3">Fashion Accessories</h4>
                        <p>
                            Any accessory on the web can be potentially tried on "virtually"!
              </p>

                    </MDBCardBody>
                </MDBCol>

                <MDBCol md="6" xl="5" className="mb-4">
                    <MDBView className="overlay rounded z-depth-2" waves>
                        <MDBContainer className="text-center mt-3 sz-2">
                            <MDBIframe src="https://www.youtube.com/embed/e_gDnIia3K4" />
                        </MDBContainer>
                        <a href="#!">
                            <MDBMask overlay="white-slight" />
                        </a>
                    </MDBView>
                    <MDBCardBody className="pb-0">
                        <a href="#!" className="brown-text">

                        </a>
                        <h4 className="font-weight-bold mb-3">Toys and Games</h4>
                        <p>
                            Ever wanted to drag-and-drop a character from a comic book (or a site), into your room?
              </p>

                    </MDBCardBody>
                </MDBCol>

            </MDBRow>
        </section>
    );
}

export default Gallery;

