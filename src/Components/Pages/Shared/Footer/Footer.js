import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div>
      <p className="fs-6 lead text-white bg-dark py-3 my-0">
        copyright &copy; <small>{year}</small> by {""}
        <span style={{ color: "#fade25" }}>Gadget Master</span>{" "}
      </p>
    </div>
  );
};

export default Footer;
