import React from 'react';
import { Carousel } from 'react-bootstrap';

const HomeCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item className="slide">
        <img
          className="d-block w-100 h-100"
          src="/images/code-wallpaper.jpg"
          alt="react"
        />
        <Carousel.Caption>
          <h3 className="font-weight-bold text-white">
            Lorem ipsum dolor sit amet.
          </h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="slide">
        <img
          className="d-block w-100 h-100"
          src="/images/web-wallpaper.jpg"
          alt="react"
        />
        <Carousel.Caption>
          <h3 className="font-weight-bold text-white">
            Lorem ipsum dolor sit amet.
          </h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
