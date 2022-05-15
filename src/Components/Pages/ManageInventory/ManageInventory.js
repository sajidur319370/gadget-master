import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useProducts from "../../../hooks/useProducts";

const ManageInventory = () => {
  const [products, setProducts] = useProducts();
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete this item?");
    if (proceed) {
      const url = `http://localhost:5000/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json)
        .then((data) => {
          console.log(data);
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        });
    }
  };

  return (
    <Container>
      <h2 className="text-primary my-5">All Products</h2>
      <Link to="/additem" className="text-decoration-none m-2 btn btn-primary">
        Add New Item
      </Link>
      <Row>
        {products.map((product) => (
          <Col
            sm={12}
            md={6}
            lg={4}
            className="border border-3 p-2 position-relative"
            key={product._id}
          >
            <img src={product.img} alt="" />
            <div className="my-5 py-5  ps-3 text-start">
              <p className="h6 text-dark">{product.name}</p>
              <p className="fs-6 text-secondary">{product.description}</p>
              <p className="h6 text-secondary">
                Quantity:<span className="text-dark">{product.quantity}</span>
              </p>
              <p className="h6 text-secondary">
                price:<span className="text-dark">${product.price}</span>
              </p>
              <p className="h6 text-secondary">
                Supplier: <span className="text-dark">{product.supplier}</span>
              </p>
              <div className="position-absolute bottom-0 start-50 translate-middle">
                <Button
                  onClick={() => handleDelete(product._id)}
                  className="m-1"
                  variant="primary"
                >
                  Delete
                </Button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ManageInventory;
