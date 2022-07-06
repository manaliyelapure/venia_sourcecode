import React, { useEffect, useCallback, useMemo, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import ProductComponent from "./ProductComponent";



const ProductPage = () => {
  
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

  const [sort, setSort] = useState()

  const onfilterChange = (filter) => {

    console.log("onfilter", sort);

//     if (filter) {

//       const result = initialDataCat.sort((a, b) => a.price - b.price);

//       console.log(initialDataCat);

//       return setSort(result);
// } 
}

  console.log("Products :", products);
  return (
    <div className="aem-Grid aem-Grid--12 listwrapper">
     
      <ProductComponent products={products} filtercomponent={ onfilterChange} />

    </div>
  );
};

export default ProductPage;
