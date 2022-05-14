import React from "react";
import { Container } from "react-bootstrap";
import Products from "../../Products/Products";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Container>
        <Products></Products>
      </Container>
    </div>
  );
};

export default Home;
