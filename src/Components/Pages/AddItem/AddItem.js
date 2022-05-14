import React from "react";
import { Button, Form } from "react-bootstrap";

const AddItem = () => {
  return (
    <div className="w-50 mx-auto my-5">
      <h2 className="text-primary">Add New Item</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicImage">
          <Form.Control type="text" placeholder="Product Image URL" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control type="text" placeholder="Product Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Control type="text" placeholder="Product Description" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicQuantity">
          <Form.Control type="Number" placeholder="Product Quantity" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Control type="number" placeholder="Product Price" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicSupplier">
          <Form.Control type="text" placeholder="Product Supplier" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
};

export default AddItem;
