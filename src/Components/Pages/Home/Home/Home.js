import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Products from "../../Products/Products";
import Banner from "../Banner/Banner";
import Introduction from "../Introduction/Introduction";
import Partners from "../Partners/Partners";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Container>
        <Products></Products>
        <Link
          to="/inventory"
          className="text-decoration-none my-5 btn btn-primary"
        >
          Manage Inventories
        </Link>
      </Container>
      <Introduction></Introduction>
      <Partners></Partners>
    </div>
  );
};

export default Home;
