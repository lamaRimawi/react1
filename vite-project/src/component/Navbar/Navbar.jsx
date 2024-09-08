import React, { useState } from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import { Navbar, Nav, Container, Button, Image } from 'react-bootstrap';
import { assets } from '../../assets/assets';
import './Navbar.css';
import '../../index.css';

function NavigationBar() {
    const [menu, setMenu] = useState("");
  const navigate = useNavigate();
    return (
        <Navbar className="navbar shadow" expand="lg" >
            <Container fluid>
                <Navbar.Brand as={NavLink} to="/">
                    <Image src={assets.logo} alt="logo" className="logoo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="navbar-nav mx-auto me-3">
                        <Nav.Link
                            as={NavLink}
                            to="/"
                            className={menu === "Home" ? 'nav-item active' : 'nav-item'}
                            onClick={() => setMenu("Home")}
                        >
                            Home
                        </Nav.Link>

                        <Nav.Link
                             as={NavLink}
                            to="/AboutUs"
                            className={menu === "about-us" ? 'nav-item active' : 'nav-item'}
                            onClick={() => setMenu("about-us")}
                        >
                           About us
                        </Nav.Link>
                        <Nav.Link
                            as={NavLink}
                            to="/ContactUs"
                            className={menu === "contact us" ? 'nav-item active' : 'nav-item'}
                            onClick={() => setMenu("contact us")}
                        >
                            Contact Us
                        </Nav.Link>
                    </Nav>
                    <div className="d-flex align-items-center ms-auto nav-right">

                        <Nav.Link as={NavLink} to="/Tasks" className="me-4 nav-right">
                            <Image src={assets.basket_icon} className={'em'} />

                            {/*<div className="dot"></div>*/}
                        </Nav.Link>
                        <Button variant="outline-success" className="text-capitalize"  onClick={()=>navigate('/LoginForm')}>

                            Sign In
                        </Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
