import React from "react";
import { Row } from "react-bootstrap";
import useProducts from "../../../hooks/useProducts";
import Product from "../Product/Product";

const Products = () => {
  const [products] = useProducts();

  return (
    <Row>
      <h2 className="text-primary my-5">All Products</h2>
      {products.map((product) => (
        <Product key={product._id} product={product}></Product>
      ))}
    </Row>
  );
};

export default Products;
