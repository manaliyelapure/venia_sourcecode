import React, { useEffect, useCallback, useMemo, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import ProductComponent from "./ProductComponent";
import { Loading } from "./Loading";



const ProductPage = ({sidebarTogglecopy, showsidebar}) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchProducts = async () => {
    setLoading(true);
    const response = await axios
 
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    setProducts(response.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const [sort, setSort] = useState()

  const onfilterChange = (filter) => {

    console.log("onfilter", sort);

    if (filter) {

      const result = products.sort((a, b) => a.price - b.price);

      console.log(products);

      return setSort(result);
    }
  }

  console.log("Products :", products);
 
  return (
   
     <React.Fragment>
        {loading ? <Loading /> : ""}
    <div className="aem-Grid aem-Grid--12 listwrapper">
      
    <ProductComponent products={products} filtercomponent={onfilterChange} sidebarTogglecopy={sidebarTogglecopy}
        showsidebar={showsidebar}  />

  </div>
     </React.Fragment>
  
    
  );
};

export default ProductPage;
