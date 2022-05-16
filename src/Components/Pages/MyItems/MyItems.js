import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [userItems, setUserItems] = useState([]);
  const [ownItems] = [userItems];
  useEffect(() => {
    const getUserItems = async () => {
      const email = user?.email;
      const url = `http://localhost:5000/userItems?email=${email}`;
      const { data } = await axios.get(url);
      setUserItems(data);
    };
    getUserItems();
  }, [user]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete this item?");
    if (proceed) {
      const url = `http://localhost:5000/userItems/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = userItems.filter((product) => product._id !== id);
          setUserItems(remaining);
        });
    }
  };

  return (
    <Container className="my-5">
      <h2 className="text-primary my-5">All My Items:{userItems.length}</h2>
      {ownItems.map((item) => (
        <h6 key={item._id}>{item.product}</h6>
      ))}
      <Row>
        {ownItems.map((product) => (
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
            </div>
            <div className="position-absolute bottom-0 start-50 translate-middle d-flex">
              <Button
                onClick={() => handleDelete(product._id)}
                className="mx-5"
                variant="danger"
              >
                Delete
              </Button>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MyItems;
