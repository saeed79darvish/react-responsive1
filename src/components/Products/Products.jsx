import React from "react";
import img1 from "./create_pic.png";
import img2 from "./convert_pic.png";
import img3 from "./capture_pic.png";

import { MDBRow, MDBCol, MDBCardBody, MDBView, MDBMask } from "mdbreact";

const Products = () => {
    return (
        <div className="text-center my-5 p-2 ">
            <h1 className="h1-responsive font-weight-bold my-3">
                Consumers want 3D experiences.
        </h1>
            <h1 className="h1-responsive font-weight-bold my-3">
                Threedy.ai helps industry deliver.
        </h1>
            <p className="grey-text w-responsive mx-auto mb-5">
                Using state of the art computational geometry and artificial intelligence,
                    we are helping businesses generate and scale 3D content more quickly
                    and cost effectively than ever before.
        </p>

            <MDBRow className="d-flex justify-content-center">
                <MDBCol md="6" xl="5" className="mb-4">
                    <MDBView className="overlay rounded z-depth-2" waves>
                        <img
                            src={img2}
                            alt=""
                            className="img-fluid"
                        />
                        <a href="#!">
                            <MDBMask overlay="white-slight" />
                        </a>
                    </MDBView>
                    <MDBCardBody className="pb-0">
                        <a href="#!" className="green-text">

                        </a>
                        <h4 className="font-weight-bold mb-3">
                            E-Commerce</h4>
                        <p>
                            Our best-in-class solution,
                           Threedy Convert™, is targeted for the
                           retail sector and takes one or more ordinary 2D
                           product photos and—fully automatically—turns them into high-quality 3D models.


              </p>

                    </MDBCardBody>
                </MDBCol>
                <MDBCol md="6" xl="5" className="mb-4">
                    <MDBView className="overlay rounded z-depth-2" waves>
                        <img
                            src={img1}
                            alt=""
                            className="img-fluid"
                        />
                        <a href="#!">
                            <MDBMask overlay="white-slight" />
                        </a>
                    </MDBView>
                    <MDBCardBody className="pb-0">
                        <a href="#!" className="blue-text">


                        </a>
                        <h4 className="font-weight-bold mb-3">
                            Manufacturing</h4>
                        <p>
                            Our forthcoming AI-based solution—aimed to revolutionize
                                 how designers and engineers develop products for manufacturing—transforms CAD
                                        drawings into quality AR models.
              </p>

                    </MDBCardBody>
                </MDBCol>
                <MDBCol md="6" xl="5" className="mb-4">
                    <MDBView className="overlay rounded z-depth-2" waves>
                        <img
                            src={img3}
                            alt=""
                            className="img-fluid"
                        />
                        <a href="#!">
                            <MDBMask overlay="white-slight" />
                        </a>
                    </MDBView>
                    <MDBCardBody className="pb-0">
                        <a href="#!" className="brown-text">

                        </a>
                        <h4 className="font-weight-bold mb-3">Scanning</h4>
                        <p>
                            Through the power of computational geometry, we are developing solutions
                                for 3D scanning to reduce noise and improve the speed and quality of
                                reverse engineering and 3D prototyping.
              </p>

                    </MDBCardBody>
                </MDBCol>

            </MDBRow>
        </div>
    );
}

export default Products;
