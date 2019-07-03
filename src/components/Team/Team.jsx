import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from "mdbreact";

const Team = () => {
    return (
        <MDBCard className="my-0 px-0 pb-2 text-center   mb-5 bg-white rounded">
            <MDBCardBody>

                <h2 className="h1-responsive font-weight-bold my-5">
                    Our amazing team
          </h2>
                <p className="grey-text w-responsive">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                        error amet numquam iure provident voluptate esse quasi, veritatis
                        totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>

                <MDBRow>
                    <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                        <img
                            tag="img"
                            src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                            className="rounded-circle z-depth-1 img-fluid"
                            alt="Sample avatar"
                        />
                        <h5 className="font-weight-bold mt-4 mb-3">Anna Williams</h5>
                        <p className="text-uppercase blue-text">Graphic designer</p>
                        <p className="grey-text">
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                            consectetur, adipisci sed quia non numquam modi tempora eius.
              </p>
                        <ul className="list-unstyled mb-0">
                            <a href="#!" className="p-2 fa-lg">
                                <MDBIcon fab icon="facebook-f" className="blue-text" />
                            </a>
                            <a href="#!" className="p-2 fa-lg">
                                <MDBIcon fab icon="twitter" className="blue-text" />
                            </a>
                            <a href="#!" className="p-2 fa-lg">
                                <MDBIcon fab icon="instagram" className="blue-text" />
                            </a>
                        </ul>
                    </MDBCol>

                    <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                        <img
                            tag="img"
                            src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg"
                            className="rounded-circle z-depth-1 img-fluid"
                            alt="Sample avatar"
                        />
                        <h5 className="font-weight-bold mt-4 mb-3">John Doe</h5>
                        <p className="text-uppercase blue-text">Web Developer</p>
                        <p className="grey-text">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            ipsa accusantium doloremque rem laudantium totam aperiam.
              </p>
                        <ul className="list-unstyled mb-0">
                            <a href="#!" className="p-2 fa-lg">
                                <MDBIcon fab icon="facebook-f" className="blue-text" />
                            </a>
                            <a href="#!" className="p-2 fa-lg">
                                <MDBIcon fab icon="instagram" className="blue-text" />
                            </a>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBCardBody>
        </MDBCard>
    );
}

export default Team;