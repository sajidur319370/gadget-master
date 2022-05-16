import { useEffect, useState } from "react";

const useProductDetails = (id) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `https://pure-mountain-40719.herokuapp.com/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  return [product, setProduct];
};
export default useProductDetails;
