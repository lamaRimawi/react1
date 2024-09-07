import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Container, Image} from "react-bootstrap";
import {assets} from "../../assets/assets.js";
import './Slide.css'


const Slide = () => {
   const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
      <Container className={'mt-5'}>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className={'w-100 ' }>

        <Image text="First slide" src={assets.food_22} className="obj " />
        <Carousel.Caption>
          <h3>join to our services</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image text="Second slide"  src={assets.food_5} className="obj " />
        <Carousel.Caption>
          <h3>join to our services</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image text="Third slide"  src={assets.food_8} className="obj "/>
        <Carousel.Caption>
          <h3>join to our services</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
          </Container>
  );
}




export default Slide
