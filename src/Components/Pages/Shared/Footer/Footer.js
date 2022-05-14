import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="bg-dark py-5 ">
      <h2>
        <span style={{ color: "#fd7e14" }}>Gadget Master</span>
      </h2>
      <div className="d-flex text-white align-items-center justify-content-center">
        <ul style={{ listStyle: "none", padding: "20px" }}>
          <li>
            <p className="text-secondary fs-3">Category</p>
          </li>
          <li>
            <h6>Laptop</h6>
          </li>
          <li>
            <h6>Camera</h6>
          </li>
          <li>
            <h6>Router</h6>
          </li>
        </ul>
        <ul style={{ listStyle: "none", padding: "20px" }}>
          <li>
            <p className="text-secondary fs-3">Customers</p>
          </li>
          <li>
            <h6>Local People</h6>
          </li>
          <li>
            <h6>Big City People</h6>
          </li>
          <li>
            <h6>Foreign People</h6>
          </li>
        </ul>
        <ul style={{ listStyle: "none", padding: "20px" }}>
          <li>
            <p className="text-secondary fs-3">Company</p>
          </li>
          <li>
            <h6>Samsung</h6>
          </li>
          <li>
            <h6>Cannon</h6>
          </li>
          <li>
            <h6>TP-link</h6>
          </li>
        </ul>
      </div>
      <p className="fs-6 lead text-white bg-secondary py-3 my-0">
        copyright &copy; <small>{year}</small> by {""}
        <span style={{ color: "#fd7e14", fontWeight: "600" }}>
          Gadget Master
        </span>{" "}
      </p>
    </div>
  );
};

export default Footer;
