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
import wind from '../Assets/wind.svg';

const ProductDetails = (props) => {
  const { productId } = useParams();
  const [selectedProduct, setSelectedProduct] = useState({});


  const dispatch = useDispatch();
  const addProduct = (product) => {

    dispatch(productsActions.addProdToCart({ ...product, quntity: 1 }));

  }
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch(`https://fakestoreapi.com/products/${productId}`, requestOptions)
      .then(res => res.json())
      .then(json => {
   
        console.log("data   -====  " + JSON.stringify(json))
        setSelectedProduct(json)

      });
  }, []);


  return (
    <section>
    <div className="aem-Grid aem-Grid--12">
      {selectedProduct.title ? (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider"></div>
            <div className=" middle aligned row">
              <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 aem-GridColumn--default--6">
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


                      <div className="aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 aem-GridColumn--default--7">
                        <img className="ui-fluid-image" src={selectedProduct.image} />
                      </div>
                    </div>

                  </div>
                </div>



                <div className="aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 aem-GridColumn--default--5">
                  <div className="column-rp">
                    <h5>Clothing / Women’s / Outerwear</h5>
                    <h1>{selectedProduct.title}</h1>
                    <h2>
                      <a className="ui teal tag label">${selectedProduct.price}</a>
                    </h2>
                    <h3 className="ui brown block header">{selectedProduct.category}</h3>
                    <p>{selectedProduct.description}</p>
                    <hr />
                    <div className="aem-Grid aem-Grid--12 aem-GridColumn--phone--12  aem-GridColumn--tablet--12 row-data">

                      <Rating />
                    </div>
                    <div className="size">
                    <h2>color</h2>
                    <div className="aem-Grid aem-Grid--12 aem-GridColumn--phone--12  aem-GridColumn--tablet--12 row-data">
                  
                      <span><img src={Swatch01} alt='' className="blue" /></span>
                      <span><img src={Swatch02} alt='' className="pink" /></span>
                      <span><img src={Swatch03} alt='' className="black" /></span>
                      <span><img src={Swatch04} alt='' className="grey" /></span>

                    </div>
                    </div>
                    <div className="size">
                    <h2>Size</h2>
                    <div className="aem-Grid aem-Grid--12 aem-GridColumn--phone--12  aem-GridColumn--tablet--12 datarowsec">
                      
                      <button>XS</button>&nbsp;  &nbsp;
                      <button>S</button>&nbsp;  &nbsp;
                      <button>M</button>&nbsp;  &nbsp;
                      <button>L</button>&nbsp;  &nbsp;
                      <button>XL</button>&nbsp;  &nbsp;
                    </div>

                    </div>
                    <div className="size">
                    <h2>Quantity</h2>
                    <div className="aem-Grid aem-Grid--12 aem-GridColumn--phone--12  aem-GridColumn--tablet--12 data">
                      
                      <img src={pluscircle} />
                      <button>1</button>
                      <img src={minuscircle} />
                    </div>
                    </div>

                    <div className="ui-vertical-animated-button" tabIndex="0">
                      <div className="hidden content">
                        <i className="shop icon"></i>
                      </div>
                      <div className="visible-content" onClick={() => addProduct(selectedProduct)}><span>Add to Cart</span></div>
                    </div>
                    <div className="aem-Grid aem-Grid--12 aem-GridColumn--phone--12  aem-GridColumn--tablet--12">
                      <div className="share">
                        <img src={heart} /> <span>Save</span>
                        <img src={share2}/> <span>Share</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className="aem-Grid aem-Grid--12 aem-GridColumn--phone--12  aem-GridColumn--tablet--12">
                <div className="aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 aem-GridColumn--default--7 description">

                  <h1>{selectedProduct.title}</h1>
                  <h3>Description</h3>
                  <p>{selectedProduct.description}</p>
                </div>
                <div className="aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 aem-GridColumn--default--5 details">
                  
                  <div className="aem-Grid aem-Grid--12 product-details">
                  <h3>Details</h3>
                    <div className="aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 aem-GridColumn--default--6">
                      <img src={slack} /><span>Sweat-wicking</span>

                    </div>
                    <div className="aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 aem-GridColumn--default--6">
                      <img src={wind} /><span>Breathable</span>

                    </div>

                  </div>



                  <div className="aem-Grid aem-Grid--12 aem-GridColumn--phone--12  aem-GridColumn--tablet--12 product-details">
                    <div className="aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 aem-GridColumn--default--6">
                      <img src={feather} /><span>Lightweight fabric</span>

                    </div>
                    <div className="aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 aem-GridColumn--default--6">
                      <img src={layers} /><span>69% nylon, 31% lycra</span>

                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      ) : (
        <div>...Loading</div>
      )}
    </div>
    </section>
  );
};

export default ProductDetails;
