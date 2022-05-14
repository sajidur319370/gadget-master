import React from "react";
import { Container } from "react-bootstrap";
import image from "./introduction.jpg";

const Introduction = () => {
  return (
    <Container className="d-lg-flex d-md-flex p-4 align-items-center justify-content-center bg-secondary my-5">
      <div>
        <img src={image} alt="" className="img-fluid" />
      </div>
      <div className="text-white">
        <h1 className="text-uppercase">
          <span style={{ color: "#fd7e14" }}>Gadget Master</span> is Here to
          Help You
        </h1>
        <h5 className="text-dark">
          We are leading company in modern business.The Electronic Gadget are
          availabl in our shop can meet your need a little bit. Thank You
        </h5>
      </div>
    </Container>
  );
};

export default Introduction;
