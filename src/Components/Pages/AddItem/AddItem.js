import React from "react";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="w-50 mx-auto my-5">
      <h2 className="text-primary">Add New Item</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          placeholder="Product Category"
          {...register("category", { required: true, maxLength: 20 })}
        />
        <br />
        <input className="mb-2" placeholder="Image URL" {...register("img")} />
        <br />
        <input
          className="mb-2"
          placeholder="Product Name"
          {...register("name", { required: true, maxLength: 20 })}
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
          {...register("supplier", { required: true, maxLength: 20 })}
        />
        <br />
        <input
          className="mb-2"
          placeholder="Status"
          {...register("status", { required: true, maxLength: 20 })}
        />
        <br />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddItem;
