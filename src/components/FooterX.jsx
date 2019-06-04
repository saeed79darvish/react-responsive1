import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterX = () => {
    return (
        <div style={{ backgroundColor: "#79ACB4" }}>
            <MDBFooter style={{ color: "indigo" }} className="font-small text-center pt-1">
                <MDBContainer style={{ color: "indigo" }} >
    
                    <hr className="rgba-white-light" style={{ margin: "0 15%" }} />
                    <MDBRow className="d-flex text-center justify-content-center mb-md-0 mb-4">
                        <MDBCol md="8" sm="12" className="mt-5">
                            <p >
                            Threedy.ai (formerly AARWILD, Inc) is founded by a team of veteran entrepreneurs, 
                            including Apple, Facebook, Paypal alums and Stanford PhDs. The company is backed 
                            by prominent investors including Plug and Play Ventures, SV Frontier, Indicator 
                            Capital, and Luc Vincent, the VP of Self-Driving at Lyft and the former head of Google Street View.
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
          <a href="https://www.Threedy.ai"> Threedy.ai </a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        </div>
    );
}

export default FooterX;