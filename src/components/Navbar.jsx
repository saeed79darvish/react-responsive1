import React, { Component } from 'react';



import { Nav, Navbar } from 'react-bootstrap';




class Navbarx extends Component {
    render() {
        return (
            <div >
                <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" fixed="top"  >
                    <Navbar.Brand href="/">Threedy.ai</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/products">Producs</Nav.Link>
                            <Nav.Link href="gallery">Gallery</Nav.Link>
                            <Nav.Link href="/about">Contact Us</Nav.Link>
                            <Nav.Link href="blog">Blog</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>


            </div>
        );
    }
}

export default Navbarx;