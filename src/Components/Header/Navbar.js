import React, { useState } from "react";
import venia from "../../Assets/venia.png";
import search from "../../Assets/search.svg";
import user from "../../Assets/user.svg";
import shoppingBag from "../../Assets/shopping-bag.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ShoppingCart from '../../ShoppingBag/ShoppingCart';
const Header = () => {

  const st = useSelector((state) => {
   
    return state.handlecartSlice.items;
  });
  const totalcartitem = st.length;
  console.log(totalcartitem);
  


  const [isActive, setActive] = useState(false);

  const slider = () => {
    setActive(!isActive);
  };
 
  const [displayIn, setdisplayIn] = useState(false);

  const hideInput = () => {
    setdisplayIn(!displayIn);
  };

  return (
   <React.Fragment>
   <header role="header" id="header">
     <div className="headerOuter">

       <button className="burger" onClick={slider}>
         <div id="line1"></div>
         <div id="line2"></div>
         <div id="line3"></div>
       </button>

       <a href="/venia-site/">
         <img src={venia} className={displayIn ? 'hideLogo' : 'logo'} />
       </a>

       <nav role="navigation">
         <ul className={isActive ? "nav-links nav-active" : "nav-links"}>
           <li aria-label="Shop Categories" className="desktopHide borderBottomHead">Shop Categories</li>
           <li>
             <a href="" aria-label="See women products">
               Women
             </a>
           </li>
           <li>
             <a href="" aria-label="men products">
               Men
             </a>
           </li>
           <li>
             <a href="" aria-label="Smart Gear products">
               Smart Gear
             </a>
           </li>
           <li>
             <a href="" aria-label="Accessories">
               Accessories
             </a>
           </li>

           <div className="bottomLinks desktopHide">
             <img src={user} />
             <a href="#" aria-label="User Account">Account</a>
           
           </div>
         </ul>
       </nav>

       <div className="endHeader">
         <input
           className={displayIn ? '' : 'hideInput'}
           type="search"
           placeholder="Search"
           aria-label="Search"
           id="inputSearch"

         />
         <button onClick={hideInput} aria-label="Click to search products" className="btn"><img src={search} /></button>

         <label for="searchBar" className="mobileHide">
           Search
         </label>
         <img src={user} className="mobileHide" />
         <a href='#' aria-label="Sign in" className="mobileHide">Sign in</a>

         <Link to="/venia-site/shoppingcart">
           <img src={shoppingBag} />
           
         </Link>
        <span>{totalcartitem}</span>
       </div>



    
     </div>
   </header>
 </React.Fragment>
);
};


export default Header;
