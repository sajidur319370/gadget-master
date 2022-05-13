import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from "../../../../images/banner/laptop.jpg";
import image2 from "../../../../images/banner/camera.jpg";
import image3 from "../../../../images/banner/router.jpg";

const Banner = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={image1} alt="First slide" />
        <Carousel.Caption>
          <h2 className="display-3 text-warning">Stay With New Technology</h2>
          <p className="fw-800 display-3 text-capitalize text-danger">
            Gadget Master is always with You to rech Your Goal
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image2} alt="Second slide" />

        <Carousel.Caption>
          <h2 className="display-3 text-warning">Be Stylish</h2>
          <p className="fw-800 display-3 text-capitalize text-danger">
            Gadget Master is always with You to rech Your Goal
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image3} alt="Third slide" />

        <Carousel.Caption>
          <h2 className="display-3 text-warning">Stay Connected</h2>
          <p className="fw-800 display-3 text-capitalize text-danger">
            Gadget Master is always with You to rech Your Goal
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
