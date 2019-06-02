import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterX = () => {
    return (
        <div style={{ backgroundColor: "#79ACB4" }}>
            <MDBFooter style={{ color: "indigo" }} className="font-small text-center pt-1">
                <MDBContainer style={{ color: "indigo" }} >
                    <MDBRow className="pt-5 mb-3 text-center d-flex justify-content-center">
                        <MDBCol md="2" className="b-3">
                            <h6 className="title font-weight-bold">
                                <a href="#!">About us</a>
                            </h6>
                        </MDBCol>
                        <MDBCol md="2" className="b-3">
                            <h6 className="title font-weight-bold">
                                <a href="#!">Products</a>
                            </h6>
                        </MDBCol>
                        <MDBCol md="2" className="b-3">
                            <h6 className="title font-weight-bold">
                                <a href="#!">Awards</a>
                            </h6>
                        </MDBCol>
                        <MDBCol md="2" className="b-3">
                            <h6 className="title font-weight-bold">
                                <a href="#!">Help</a>
                            </h6>
                        </MDBCol>
                        <MDBCol md="2" className="b-3">
                            <h6 className="title font-weight-bold">
                                <a href="#!">Contact</a>
                            </h6>
                        </MDBCol>
                    </MDBRow>
                    <hr className="rgba-white-light" style={{ margin: "0 15%" }} />
                    <MDBRow className="d-flex text-center justify-content-center mb-md-0 mb-4">
                        <MDBCol md="8" sm="12" className="mt-5">
                            <p style={{ lineHeight: "1.7rem" }}>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                quae ab illo inventore veritatis et quasi architecto beatae
                                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                                voluptas sit aspernatur aut odit aut fugit, sed quia
                                consequuntur.
            </p>
                        </MDBCol>
                    </MDBRow>
                    <hr className="clearfix d-md-none rgba-white-light" style={{ margin: "10% 15% 5%" }} />
                    <MDBRow className="pb-3">
                        <MDBCol md="12">
                            <div className="mb-4 ">
                                <a className="fb-ic">
                                    <i className="fab fa-facebook-f fa-lg white-text mr-md-2"> </i>
                                </a>

                                <a className="tw-ic" style={{ marginLeft: "20px" }}>
                                    <i className="fab fa-twitter fa-lg white-text mr-md-2"> </i>
                                </a>

                                <a className="gplus-ic" style={{ marginLeft: "20px" }}>
                                    <i className="fab fa-google-plus-g fa-lg white-text mr-md-2">

                                    </i>
                                </a>

                                <a className="li-ic" style={{ marginLeft: "20px" }}>
                                    <i className="fab fa-linkedin-in fa-lg white-text mr-md-2"> </i>
                                </a>

                                <a className="ins-ic" style={{ marginLeft: "20px" }}>
                                    <i className="fab fa-instagram fa-lg white-text mr-md-2"> </i>
                                </a>
                                <a className="pin-ic" style={{ marginLeft: "20px" }}>
                                    <i className="fab fa-pinterest fa-lg white-text"> </i>
                                </a>

                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright:
          <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        </div>
    );
}

export default FooterX;