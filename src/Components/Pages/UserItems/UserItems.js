import axios from "axios";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import useProductDetails from "../../../hooks/useProductDetails";

const UserItems = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [product] = useProductDetails(id);
  const { img, name, description, price, quantity, supplier, status } = product;
  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const userItems = {
      product: product.name,
      email: user.email,
      name: user.displayName,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };
    axios.post("http://localhost:5000/userItems", userItems).then((res) => {
      const { data } = res;
      if (data.insertedId) {
        alert("Your order is booked");
        event.target.reset();
      }
    });
  };

  return (
    <Container>
      <h2 className="text-primary">Add To My Items</h2>

      <Row className="my-5 border border-3">
        <Col sm={12} md={6} lg={6}>
          <img src={img} alt="" className="img-fluid" />
        </Col>
        <Col sm={12} md={6} lg={6} className="text-start">
          <h4>{name}</h4>
          <p className="text-secondary">{description}</p>
          <h6 className="text-secondary">
            price:
            <span className="text-dark">{price}</span>
          </h6>
          <h6 className="text-secondary">
            Quantity:
            <span className="text-dark">{quantity}</span>
          </h6>
          <h6 className="text-secondary">
            Supplier:
            <span className="text-dark">{supplier}</span>
          </h6>
          <h6 className="text-secondary">
            Status:
            <span className="text-dark">{status}</span>
          </h6>
        </Col>
      </Row>
      <form onSubmit={handlePlaceOrder} className="my-5">
        <input
          type="text"
          className="mb-2"
          name="serviceName"
          value={product.name}
          placeholder="Service Name"
          required
          readOnly
          disabled
        />
        <br />
        <input
          type="email"
          className="mb-2"
          name="email"
          value={user?.email}
          placeholder="Email"
          required
          readOnly
          disabled
        />
        <br />
        <input
          type="text"
          className="mb-2"
          name="userName"
          value={user?.displayName}
          placeholder="Name"
          required
          readOnly
          disabled
        />
        <br />
        <input
          type="text"
          className="mb-2"
          name="phone"
          placeholder="Phone"
          autoComplete="off"
          required
        />
        <br />
        <input
          type="text"
          className="mb-2"
          name="address"
          placeholder="Address"
          autoComplete="off"
          required
        />
        <br />

        <button className="btn btn-primary" type="submit">
          Add to My Items
        </button>
      </form>
    </Container>
  );
};

export default UserItems;
