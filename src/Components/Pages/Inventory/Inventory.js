import React from "react";
import { useParams } from "react-router-dom";

const Inventory = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Product:{id}</h2>
    </div>
  );
};

export default Inventory;
