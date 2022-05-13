import React from "react";
import { Container } from "react-bootstrap";
import Products from "../../Products/Products";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <Container>
      <Banner></Banner>
      <Products></Products>
    </Container>
  );
};

export default Home;
