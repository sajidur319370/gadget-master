import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const Inventory = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  const { img, name, description, price, quantity, supplier, status } = product;
  return (
    <Container className="my-5">
      <h2 className="text-primary">Inventory</h2>
      <Row className="my-5 border border-3">
        <Col sm={12} md={6} lg={6}>
          <img src={img} alt="" className="img-fluid" />
        </Col>
        <Col sm={12} md={6} lg={6} className="text-start">
          <h4>{name}</h4>
          <p className="text-secondary">{description}</p>
          <h6 className="text-secondary">
            price:
            <span className="text-dark">{price}</span>
          </h6>
          <h6 className="text-secondary">
            Quantity:
            <span className="text-dark">{quantity}</span>
          </h6>
          <h6 className="text-secondary">
            Supplier:
            <span className="text-dark">{supplier}</span>
          </h6>
          <h6 className="text-secondary">
            Status:
            <span className="text-dark">{status}</span>
          </h6>
        </Col>
      </Row>

      <Button variant="primary" className="m-2">
        Delevered
      </Button>

      <Form className="border border-3 w-50 mx-auto my-5 p-2">
        <Form.Group className="text-white" controlId="formBasicNumber">
          <Form.Control type="number" placeholder="Increase Quantity" />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          Restock The Item
        </Button>
      </Form>
      <Link
        to="/inventory"
        className="text-decoration-none my-5 btn btn-primary"
      >
        Manage Inventories
      </Link>
    </Container>
  );
};

export default Inventory;
