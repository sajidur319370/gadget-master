import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const Inventory = () => {
  const { id } = useParams();
  return (
    <div className="my-5">
      <h2 className="text-primary">Inventory</h2>
      <h2>Product:{id}</h2>
      <div className="w-50 mx-auto border border-3 my-5">
        <div className="d-flex">
          <h2>Image:</h2>
          <div>
            <h6>Name</h6>
            <h6>description</h6>
            <h6>price</h6>
            <h6>Quantity</h6>
            <h6>supplier Name</h6>
          </div>
        </div>
        <Button variant="primary" className="m-2">
          Delevered
        </Button>
      </div>
      <Form className="border border-3 w-25 mx-auto my-5 p-2">
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
    </div>
  );
};

export default Inventory;
