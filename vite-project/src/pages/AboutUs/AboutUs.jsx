import React from 'react'
import './AboutUs.css'
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import {assets} from "../../assets/assets.js";
import {useNavigate} from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
   <Container fluid className={'mt-5'}>
     <Row >
     <Col md={5} className={' align-content-center px-5 '}>
       <h1 className={'text-info fw-bolder card border-0'}>
         about us <br/> employee page
       </h1>
       <p className={'text-muted card border-0'}>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
       </p>
       <Button className={'rounded w-50 mt-2'} onClick={()=>navigate('/')}>get started</Button>
     </Col>
     <Col md={7}>
       <Image src={assets.aboutUs} className={'w-100'}></Image>
     </Col >
       </Row>
   </Container>
  )
}

export default AboutUs
