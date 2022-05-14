import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Products from "../../Products/Products";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Container>
        <Products></Products>
        <Link
          to="/inventory"
          className="text-decoration-none m-2 btn btn-primary"
        >
          Manage Inventories
        </Link>
      </Container>
    </div>
  );
};

export default Home;
