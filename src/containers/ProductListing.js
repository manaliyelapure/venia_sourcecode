import React, { useEffect, useCallback, useMemo, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import ProductComponent from "./ProductComponent";
// import SideBar from "./SideBar";


const ProductPage = () => {
  // const products = useSelector((state) => state.allProducts.products);
  // const dispatch = useDispatch();
  const [products,setProducts] = useState([]);
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);
  return (
    <div className="aem-Grid aem-Grid--12">
     
      <ProductComponent products={products} />
    </div>
  );
};

export default ProductPage;
