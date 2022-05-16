import React from "react";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = "http://localhost:5000/inventory";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    alert("Successfully Added!");
  };

  return (
    <div className="w-50 mx-auto my-5">
      <h2 className="text-primary">Add New Item</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          placeholder="Product Category"
          {...register("category")}
        />
        <br />
        <input className="mb-2" placeholder="Image URL" {...register("img")} />
        <br />
        <input
          className="mb-2"
          placeholder="Product Name"
          {...register("name")}
        />
        <br />
        <input
          className="mb-2"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <br />
        <input
          className="mb-2"
          placeholder="Product Description"
          {...register("description")}
        />
        <br />
        <input
          className="mb-2"
          placeholder="Quantity"
          type="number"
          {...register("quantity")}
        />
        <br />
        <input
          className="mb-2"
          placeholder="Supplier Name"
          {...register("supplier")}
        />
        <br />
        <input className="mb-2" placeholder="Status" {...register("status")} />
        <br />
        <input type="submit" value="Add" className="btn btn-success" />
      </form>
    </div>
  );
};

export default AddItem;
