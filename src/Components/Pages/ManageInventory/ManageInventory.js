import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const ManageInventory = () => {
  const [products, setProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(6);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5000/productCount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / 6);
        setPageCount(pages);
      });
  }, []);

  //===========load 6 items in one page==============
  useEffect(() => {
    fetch(`http://localhost:5000/inventory?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [page, size]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete this item?");
    if (proceed) {
      const url = `http://localhost:5000/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
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
      <Link to="/additem" className="text-decoration-none m-2 btn btn-success">
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
            </div>
            <div className="position-absolute bottom-0 start-50 translate-middle d-flex">
              <Button
                onClick={() => {
                  navigate(`/inventory/${product._id}`);
                }}
                variant="primary"
              >
                Update
              </Button>
              <Button
                className="mx-5"
                onClick={() => handleDelete(product._id)}
                variant="danger"
              >
                Delete
              </Button>
              <Link to={`/cart/${product._id}`}>
                <Button variant="success">AddForMe</Button>
              </Link>
            </div>
          </Col>
        ))}
      </Row>
      <div className="text-start my-2">
        {[...Array(pageCount).keys()].map((number) => (
          <button
            key={number}
            onClick={() => setPage(number)}
            className={
              page === number
                ? "btn btn-primary me-1"
                : "btn btn-secondary me-1"
            }
          >
            {number + 1}
          </button>
        ))}
        <button onClick={() => setPage(page + 1)} className="btn btn-primary">
          Next
        </button>
      </div>
    </Container>
  );
};

export default ManageInventory;
