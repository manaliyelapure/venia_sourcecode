import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../redux/cartSlice";

import feather from '../Assets/feather.svg';
import layers from '../Assets/layers.svg';
import slack from '../Assets/slack.svg';
import pluscircle from '../Assets/plus-circle.svg';
import minuscircle from '../Assets/minus-circle.svg';
import heart from '../Assets/heart.svg';
import share2 from '../Assets/share-2.svg';
import Swatch01 from '../Assets/Swatch 01.png';
import Swatch02 from '../Assets/Swatch 02.png';
import Swatch03 from '../Assets/Swatch 03.png';
import Swatch04 from '../Assets/Swatch 04.png';
import BreathIcon from '../Assets/BreathIcon.png';

const ProductDetails = (props) => {
  const { productId } = useParams();
  const [selectedProduct,setSelectedProduct]=useState({});

  
  const dispatch = useDispatch();
  const addProduct=(product)=>{
      
      dispatch(productsActions.addProdToCart({...product, quntity:1}));

  }
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
  };
   fetch(`https://fakestoreapi.com/products/${productId}`, requestOptions)
      .then(res => res.json())
      .then(json => {
        // this.props.updateproductslist(json);
        console.log("data   -====  "+JSON.stringify(json))
        setSelectedProduct(json)
         
     });
  }, []);

// const addtocart=(inputdata)=>{
//   console.log(JSON.stringify(inputdata));

//   let obj={
//     id:inputdata.id,
//     price:inputdata.price,
//     description:inputdata.description,
//     title:inputdata.title,
//     rating:inputdata.rating,
//     category:inputdata.category,
//     image:inputdata.image,
//     quantity:2
// }
//  dispatch(addToCart(obj));
//   dispatch(addToCart())
// }
  return (
    <div className="aem-Grid aem-Grid--12">
      {selectedProduct.title ?  (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider"></div>
            <div className=" middle aligned row">
              <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--phone--6  aem-GridColumn--tablet--12 aem-GridColumn--default--6">
                  <div className="column-lp">
                    <div className="aem-Grid aem-Grid--12">
                      <div className="aem-GridColumn aem-GridColumn--default--4">
                        <div className="aem-Grid aem-Grid--12 col-lp">
                          <img className="ui-fluid-image" src={selectedProduct.image} />
                        </div>
                        <div className="aem-Grid aem-Grid--12 col-lp">
                          <img className="ui-fluid-image" src={selectedProduct.image} />
                        </div>
                        <div className="aem-Grid aem-Grid--12 col-lp">
                          <img className="ui-fluid-image" src={selectedProduct.image} />
                        </div>
                        <div className="aem-Grid aem-Grid--12 col-lp">
                          <img className="ui-fluid-image" src={selectedProduct.image} />
                        </div>
                        <div className="aem-Grid aem-Grid--12 col-lp">
                          <img className="ui-fluid-image" src={selectedProduct.image} />
                        </div>
                        <div className="aem-Grid aem-Grid--12">
                          <img className="../Assets/down-arrow.svg" />
                        </div>
                      </div>


                      <div className="aem-GridColumn aem-GridColumn--default--8">
                        <img className="ui-fluid-image" src={selectedProduct.image} />
                      </div>
                    </div>

                  </div>
                </div>



                <div className="aem-GridColumn aem-GridColumn--phone--6  aem-GridColumn--tablet--12 aem-GridColumn--default--6">
                  <div className="column-rp">
                    <h5>Clothing / Women’s / Outerwear</h5>
                    <h1>{selectedProduct.title}</h1>
                    <h2>
                      <a className="ui teal tag label">${selectedProduct.price}</a>
                    </h2>
                    <h3 className="ui brown block header">{selectedProduct.category}</h3>
                    <p>{selectedProduct.description}</p>
                    <hr />
                    <div className="aem-Grid aem-Grid--12 row-data">

                      <Rating />
                    </div>

                    <div className="aem-Grid aem-Grid--12 row-data">
                      <h2>color</h2>
                      <span><img src={Swatch01} alt='' className="blue"/></span>
                      <span><img src={Swatch02} alt='' className="pink"/></span>
                      <span><img src={Swatch03} alt='' className="black"/></span>
                      <span><img src={Swatch04} alt='' className="grey"/></span>
                      
                    </div>
                    <div className="aem-Grid aem-Grid--12 row-data">
                      <h2>Size</h2>
                      <button>XS</button>
                      <button>S</button>
                      <button>M</button>
                      <button>L</button>
                      <button>XL</button>
                    </div>
                    <div className="aem-Grid aem-Grid--12 data">
                      <h2>Quantity</h2>
                      <img src={pluscircle} />
                      <button>1</button>
                      <img src={minuscircle} />
                    </div>

                    <div className="ui-vertical-animated-button" tabIndex="0">
                      <div className="hidden content">
                        <i className="shop icon"></i>
                      </div>
                      <div className="visible-content" onClick={()=>addProduct(selectedProduct)}>Add to Cart</div>
                    </div>
                    <div className="aem-Grid aem-Grid--12">
                      <div className="share">
                        <img src={heart} /> <span>Save</span>
                        <img src={share2} /> <span>Share</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className="aem-Grid aem-Grid--12 ">
                <div className="aem-GridColumn aem-GridColumn--phone--6  aem-GridColumn--tablet--12 aem-GridColumn--default--6">

                  <h1>{selectedProduct.title}</h1>
                  <h3>Description</h3>
                  <p>{selectedProduct.description}</p>
                </div>
                <div className="aem-GridColumn aem-GridColumn--phone--6  aem-GridColumn--tablet--12 aem-GridColumn--default--6">
                  <h3>Details</h3>
                  <div className="aem-Grid aem-Grid--12 product-details">
                    <div className="aem-GridColumn aem-GridColumn--phone--6  aem-GridColumn--tablet--12 aem-GridColumn--default--3">
                      <img src={slack} /><span>Sweat-wicking</span>

                    </div>
                    <div className="aem-GridColumn aem-GridColumn--phone--6  aem-GridColumn--tablet--12 aem-GridColumn--default--3">
                      <img src={BreathIcon} /><span>Breathable</span>

                    </div>
                  </div>

                  <div className="aem-Grid aem-Grid--12 product-details">
                    <div className="aem-GridColumn aem-GridColumn--phone--6  aem-GridColumn--tablet--12 aem-GridColumn--default--3">
                      <img src={feather} /><span>Lightweight fabric</span>

                    </div>
                    <div className="aem-GridColumn aem-GridColumn--phone--6  aem-GridColumn--tablet--12 aem-GridColumn--default--3">
                      <img src={layers} /><span>69% nylon, 31% lycra</span>

                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      ) :(
        <div>...Loading</div>
      )}
    </div>
  );
};

export default ProductDetails;