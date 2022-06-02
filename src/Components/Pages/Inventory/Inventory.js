import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import useProductDetails from "../../../hooks/useProductDetails";

const Inventory = () => {
  const { id } = useParams();
  const [product] = useProductDetails(id);
  const { img, name, description, price, quantity, supplier, status } = product;

  const handleUpdate = (event) => {
    event.preventDefault();
    const updateQuantity = event.target.updateQuantity.value;
    const updateProduct = { updateQuantity };

    // send data to server
    const url = `https://pure-mountain-40719.herokuapp.com/inventoryUpdate/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        alert("Successfully Updated!");
        event.target.reset();
        console.log(product);
      });
    window.location.reload();
  };

  const handleDeliverUpdate = (quantity) => {
    const deleverQuantity = quantity - 1;
    const deleverProduct = { deleverQuantity };

    // send data to server
    const url = `https://pure-mountain-40719.herokuapp.com/inventoryDelever/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(deleverProduct),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        alert("Successfully Delevered!");
        console.log(product);
      });
    window.location.reload();
  };

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

      <Button
        onClick={() => handleDeliverUpdate(quantity)}
        variant="danger"
        className="my-5"
      >
        Delevered
      </Button>

      <form onSubmit={handleUpdate}>
        <input
          className="mb-2"
          name="updateQuantity"
          placeholder="Update Quantity"
          type="number"
        />
        <br />
        <input
          type="submit"
          value="Restock The Items"
          className="btn btn-success"
        />
      </form>
      <Link
        to="/inventory"
        className="text-decoration-none my-5 btn btn-secondary"
      >
        Manage Inventories
      </Link>
    </Container>
  );
};

export default Inventory;
