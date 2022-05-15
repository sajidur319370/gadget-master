import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useProductDetails from "../../../hooks/useProductDetails";

const UserItems = () => {
  const { id } = useParams();
  const [product] = useProductDetails(id);
  const { img, name, description, price, quantity, supplier, status } = product;
  return (
    <Container>
      <h2 className="text-primary">Add To My Items</h2>

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
      <form className="my-5">
        <input type="email" className="mb-2" placeholder="email" required />
        <br />
        <input type="text" className="mb-2" placeholder="Name" required />
        <br />
        <input type="text" className="mb-2" placeholder="Phone" required />
        <br />
        <input type="text" className="mb-2" placeholder="Address" required />
        <br />
        <input
          type="text"
          className="mb-2"
          placeholder="Service Name"
          required
        />
        <br />
        <button className="btn btn-primary" type="submit">
          Add to My Items
        </button>
      </form>
    </Container>
  );
};

export default UserItems;
