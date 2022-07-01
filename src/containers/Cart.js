import React from 'react';
import Banner from '../Components/Banner/Banner';
import Sidebar from '../Components/sidebar/Sidebar';
import ProductListing  from '../containers/ProductListing';

function Cart() {
  return (
    <div className="aem-Grid aem-Grid--12 Cart">
      <Banner />

      <div className="aem-GridColumn aem-GridColumn--default--3">
        <Sidebar/>
      </div>

      <div className="aem-GridColumn aem-GridColumn--default--9">
        <ProductListing />
        
      </div>
    </div>
  )
}

export default Cart;