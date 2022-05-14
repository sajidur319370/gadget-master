import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="bg-dark pt-5 ">
      <h2>
        <span style={{ color: "#fd7e14" }}>Gadget Master</span>
      </h2>
      <Row className="text-secondary ">
        <Col sm={12} md={6} lg={3}>
          <ul style={{ listStyle: "none", padding: "20px" }}>
            <li>
              <p className="text-white fs-3">Category</p>
            </li>
            <li>
              <h6>Laptop</h6>
            </li>
            <li>
              <h6>Camera</h6>
            </li>
            <li>
              <h6>Router</h6>
            </li>
          </ul>
        </Col>
        <Col sm={12} md={6} lg={3}>
          <ul style={{ listStyle: "none", padding: "20px" }}>
            <li>
              <p className="text-white fs-3">Customers</p>
            </li>
            <li>
              <h6>Local People</h6>
            </li>
            <li>
              <h6>Big City People</h6>
            </li>
            <li>
              <h6>Foreign People</h6>
            </li>
          </ul>
        </Col>

        <Col sm={12} md={6} lg={3}>
          <ul style={{ listStyle: "none", padding: "20px" }}>
            <li>
              <p className="text-white fs-3">Company</p>
            </li>
            <li>
              <h6>Samsung</h6>
            </li>
            <li>
              <h6>Cannon</h6>
            </li>
            <li>
              <h6>TP-link</h6>
            </li>
          </ul>
        </Col>
        <Col sm={12} md={6} lg={3}>
          <ul style={{ listStyle: "none", padding: "20px" }}>
            <li>
              <p className="text-white fs-3">Address</p>
            </li>
            <li>
              <h6>Elephant Road,Dhaka,1207</h6>
            </li>
            <li>
              <h6>Contact:0155555555</h6>
            </li>
            <li>
              <Link to="/">abc@def.com</Link>
            </li>
          </ul>
        </Col>
      </Row>
      <p className="fs-6 lead text-white bg-secondary py-3 my-0">
        copyright &copy; <small>{year}</small> by {""}
        <span style={{ color: "#fd7e14", fontWeight: "600" }}>
          Gadget Master
        </span>{" "}
      </p>
    </div>
  );
};

export default Footer;
