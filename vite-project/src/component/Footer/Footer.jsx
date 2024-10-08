import React from 'react';
import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap';
import { assets } from '../../assets/assets';
import './Footer.css';
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-dark text-light py-5 mt-5" id="footer">
            <Container>
                <Row className={'mt-5'}>
                    <Col md={5} className="pe-5">
                        <Link to={'/'}> <Image src={assets.logo} alt="logo" className="mb-3 w-50" /> </Link>
                        <p>
                            Using color to add meaning only provides a visual indication, which will not be conveyed to users of
                            assistive technologies – such as screen readers. Ensure that information denoted by the color is either
                            obvious from the content itself (e.g. the visible text)
                        </p>
                        <div className="d-flex mb-3">
                           <a href={''} > <Image src={assets.facebook_icon} className="me-2 " /> </a>
                            <a href={""}><Image src={assets.twitter_icon} className="me-2" /></a>
                          <a href={''}>   <Image src={assets.linkedin_icon} /></a>

                        </div>
                    </Col>
                    <Col md={3} className={'mb-3'}>
                        <h5>Company</h5>
                        <ListGroup variant="flush">
                            <ListGroup.Item as="li" className="bg-dark text-light border-0">Home</ListGroup.Item>
                            <ListGroup.Item as="li" className="bg-dark text-light border-0">About Us</ListGroup.Item>
                            <ListGroup.Item as="li" className="bg-dark text-light border-0">Delivery</ListGroup.Item>
                            <ListGroup.Item as="li" className="bg-dark text-light border-0">Privacy Policy</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={4}>
                        <h5>Get in Touch</h5>
                        <ListGroup variant="flush">
                        <a href={''} className={'text-decoration-none'}>    <ListGroup.Item as="li" className="bg-dark text-light border-0">+1-212-456-7890</ListGroup.Item></a>
                       <a href={''} className={'text-decoration-none'}>     <ListGroup.Item as="li" className="bg-dark text-light border-0">contact@example.com</ListGroup.Item></a>
                        </ListGroup>
                    </Col>
                </Row>
                <hr className="bg-light border-1 mt-5" />
                <p className="text-center mt-3">Copyright 2024 &copy; react.com - All rights reserved.</p>
            </Container>
        </footer>
    );
}

export default Footer;
