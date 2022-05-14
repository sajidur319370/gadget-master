import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useProducts from "../../../hooks/useProducts";
import Product from "../Product/Product";

const ManageInventory = () => {
  const [products] = useProducts();

  return (
    <Container>
      <Row>
        <h2 className="text-primary my-5">All Products</h2>
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </Row>
      <Link to="/additem" className="text-decoration-none m-2 btn btn-primary">
        Add New Item
      </Link>
    </Container>
  );
};

export default ManageInventory;
