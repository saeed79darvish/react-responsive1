import React from "react";
import { MDBRow, MDBCol, MDBIcon, MDBBtn } from "mdbreact";

const About = () => {
    return (
        <div style={{ width: "100%" }}>
            <div className="my-6 m-3">
                <h2 className="h1-responsive font-weight-bold text-center my-4">
                    Contact us
      </h2>
                <p className="text-center w-responsive mx-auto m-2 pb-10">


                    4-626 Jefferson Ave, Redwood City, CA 94063


      </p>
                <MDBRow>
                    {/* <MDBCol lg="4" className="lg-2 ml-1 mb-8">
                        <MDBCard>
                            <MDBCardBody>
                                <div className="form-header blue accent-1">
                                    <h3 className="mt-2">
                                        <MDBIcon icon="envelope" /> Write to us:
                </h3>
                                </div>
                                <p className="dark-grey-text">
                                    We'll write rarely, but only the best content.
              </p>
                                <div className="md-form">
                                    <MDBInput
                                        icon="user"
                                        label="Your name"
                                        iconClass="grey-text"
                                        type="text"
                                        id="form-name"
                                    />
                                </div>
                                <div className="md-form">
                                    <MDBInput
                                        icon="envelope"
                                        label="Your email"
                                        iconClass="grey-text"
                                        type="text"
                                        id="form-email"
                                    />
                                </div>
                                <div className="md-form">
                                    <MDBInput
                                        icon="tag"
                                        label="Subject"
                                        iconClass="grey-text"
                                        type="text"
                                        id="form-subject"
                                    />
                                </div>
                                <div className="md-form">
                                    <MDBInput
                                        icon="pencil-alt"
                                        label="Icon Prefix"
                                        iconClass="grey-text"
                                        type="textarea"
                                        id="form-text"
                                    />
                                </div>
                                <div className="text-center">
                                    <MDBBtn color="light-blue">Submit</MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol> */}
                    <MDBCol lg="7">
                        <div
                            id="map-container"
                            className="rounded z-depth-1-half map-container"
                            style={{ height: "400px" }}
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.8451926829102!2d-122.23081658413201!3d37.487979379812735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fa252e21ede2f%3A0x33460b3a33df31dd!2s626+Jefferson+Ave%2C+Redwood+City%2C+CA+94063!5e0!3m2!1sen!2sus!4v1559452808174!5m2!1sen!2sus"
                                title="This is a unique title"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                style={{ border: 0 }}
                            />


                        </div>
                        <br />
                        <MDBRow className="text-center">
                            <MDBCol md="4">
                                <MDBBtn tag="a" floating color="blue" className="accent-1">
                                    <MDBIcon icon="map-marker-alt" />
                                </MDBBtn>
                                <p>Redwood City, CA 94063</p>
                                <p className="mb-md-0">United States</p>
                            </MDBCol>
                            <MDBCol md="4">
                                <MDBBtn tag="a" floating color="blue" className="accent-1">
                                    <MDBIcon icon="phone" />
                                </MDBBtn>
                                <p>+1 (408) 412 2546</p>
                                <p className="mb-md-0">Mon - Fri, 8:00-17:00</p>
                            </MDBCol>
                            <MDBCol md="4">
                                <MDBBtn tag="a" floating color="blue" className="accent-1">
                                    <MDBIcon icon="envelope" />
                                </MDBBtn>
                                <p>nima.sarshar@gmail.com</p>

                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </div>
        </div>
    );
}

export default About;