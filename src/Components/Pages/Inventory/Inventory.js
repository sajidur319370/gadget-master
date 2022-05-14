import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const Inventory = () => {
  const { id } = useParams();
  return (
    <div className="my-5">
      <h2 className="text-primary">Inventory</h2>
      <h2>Product:{id}</h2>
      <div className="w-50 mx-auto">
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
      </div>
      <Form>
        <Form.Group
          className="mb-3 text-white w-50 mx-auto"
          controlId="formBasicNumber"
        >
          <Form.Label>1</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit" className="m-2">
          Restock The Item
        </Button>
      </Form>
      <Link
        to="/inventory"
        className="text-decoration-none m-2 btn btn-primary"
      >
        Manage Inventories
      </Link>
    </div>
  );
};

export default Inventory;
