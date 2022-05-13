import React from "react";
import { Button, Col } from "react-bootstrap";

const Product = ({ product }) => {
  const { name, img, description, price, quantity, supplier } = product;
  return (
    <Col
      sm={12}
      md={6}
      lg={4}
      className="border border-3 p-2 position-relative"
    >
      <img src={img} alt="" />
      <div className="my-5 py-5  ps-3 text-start">
        <p className="h6 text-dark">{name}</p>
        <p className="fs-6 text-secondary">{description}</p>
        <p className="h6 text-secondary">
          Quantity:<span className="text-dark">{quantity}</span>
        </p>
        <p className="h6 text-secondary">
          price:<span className="text-dark">${price}</span>
        </p>
        <p className="h6 text-secondary">
          Supplier: <span className="text-dark">{supplier}</span>
        </p>
      </div>
      <Button className="position-absolute bottom-0 start-50 translate-middle">
        Stock Update
      </Button>
    </Col>
  );
};

export default Product;
