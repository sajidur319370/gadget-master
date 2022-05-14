import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image1 from "./person1.jpg";
import image2 from "./person2.jpg";
import image3 from "./person3.jpg";
import image4 from "./person4.jpg";
import image5 from "./person5.jpg";
import image6 from "./person6.jpg";

const Partners = () => {
  return (
    <Container className="my-5">
      <h1 className="text-info">Business Partners</h1>
      <Row>
        <Col sm={12} md={6} lg={4} className="border border-2">
          <img src={image1} alt="" />
          <h3>Hamid Ali</h3>
          <h6>Branch Manager</h6>
        </Col>
        <Col sm={12} md={6} lg={4} className="border border-2">
          <img src={image2} alt="" />
          <h3>Kamrul Faruk</h3>
          <h6>Assistant Manager</h6>
        </Col>
        <Col sm={12} md={6} lg={4} className="border border-2">
          <img src={image3} alt="" />
          <h3>Zoshim Halder</h3>
          <h6>Audit Officer</h6>
        </Col>
        <Col sm={12} md={6} lg={4} className="border border-2">
          <img src={image4} alt="" />
          <h3>Bappa Raj</h3>
          <h6>Quality Manager</h6>
        </Col>
        <Col sm={12} md={6} lg={4} className="border border-2">
          <img src={image5} alt="" />
          <h3>Kabila Khan</h3>
          <h6>Product Importer</h6>
        </Col>
        <Col sm={12} md={6} lg={4} className="border border-2">
          <img src={image6} alt="" />
          <h3>Rubel Bari</h3>
          <h6>Account officer</h6>
        </Col>
      </Row>
    </Container>
  );
};

export default Partners;
