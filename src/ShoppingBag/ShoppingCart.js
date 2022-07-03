import React from "react";
import PP_BTN from '../Assets/PP_BTN.png';
import lock from '../Assets/lock.svg';
import chevrondown from "../Assets/chevron-down.svg";
import edit2 from "../Assets/edit-2.svg";
import trash2 from "../Assets/trash-2.svg";
import heart from "../Assets/heart.svg";
import { useSelector } from "react-redux";
import Slicker from '../ShoppingBag/Slicker';



function ShoppingCart() {
  
  const shoppingbagitem = useSelector((Value) => Value.handlecartSlice.items);

  return (
    <section className="shopCart customContainer">
      <div className="aem-Grid aem-Grid--12 shop-head">
        <h1>Your Shopping Bag</h1>
        <div className="bottom-line"></div>
      </div>

      <div className="aem-Grid aem-Grid--12 BagWrapper">
  






        {shoppingbagitem.map((val) => {
          return (
            <React.Fragment>
              <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 leftSideCart">
                <div className="shopping-cart">
                  <img src={val.image} className="productimage" />
                </div>

                <div className="aem-GridColumn aem-GridColumn--tablet--12 aem-GridColumn--phone--12 aem-GridColumn--default--4 details-pricing">
                  <h1>{val.title}</h1>
                  <p>Size : Medium</p>
                  <p>Color : Storm</p>
                  <p>${val.price}</p>
                </div>

                <div className="Outerwrap">
                  <div className="py-1 cartBtn">
                    <button>-</button>
                    <div className="quantity">1</div>
                    <button>+</button>
                  </div>

                  <div className="outer">
                    <div className="innerwrap">
                      <img src={edit2} />
                      <span> Edit item</span>
                    </div>
                    <div className="innerwrap">
                      <img src={trash2} />
                      <span> Remove</span>
                    </div>
                    <div className="innerwrap">
                      <img src={heart} />
                      <span> Save for later</span>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>

          );
        })}




        <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 summary">


          <div className="prod-Summary">
            <div>
              <h3>Pricing Summary</h3>
              <ul>
                <li>Subtotal</li>
                <li>Coupon</li>
                <li>Gift Card</li>
                <li>Estimated tax</li>
                <li>Estimated shipping</li>
                <h3>Estimated Total</h3>
              </ul>
            </div>
            <div>
              <h3 className="price-val">""</h3>
              <ul>
                <li></li>
                <li>$ 388.00</li>
                <li>- $ 77.60</li>
                <li>- $ 100.00</li>
                <li>$ 23.28</li>
                <li>FREE</li>
                <h3>$ 233.68</h3>
              </ul>
            </div>
          </div>

          <div className="aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 aem-GridColumn--default--4 check">
            <button className="checkOut"><img src={lock} />CHECKOUT</button>
          </div>
          <div className="aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 aem-GridColumn--default--4">
            <img src={PP_BTN} />
          </div>


        </div>
      </div>



      <div className="aem-Grid aem-Grid--12">
        <div className="aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 aem-GridColumn--default--8 py-1">
          

          <button class="accordion">Estimate your Shipping <span>shipping to 91001 <img src={chevrondown} /> </span></button>
          <div className="panel">
            <p>Lorem ipsum...</p>
          </div>

          <button class="accordion">Enter a Coupon Code<span>20%discount applied <img src={chevrondown} /></span></button>
          <div className="panel">
            <p>Lorem ipsum...</p>
          </div>

          <button class="accordion">Apply Gift Card </button>
          <div className="panel">
            <p>Lorem ipsum...</p>
          </div>


        </div>
      </div>

      {/* <div className='aem-Grid aem-Grid--12'>
        <Slicker />
      </div> */}
    </section>
  );
}

export default ShoppingCart;


