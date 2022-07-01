import React from 'react';
import ShoppingCart from '../../ShoppingBag/ShoppingCart';
import search from '../../Assets/search.svg';
import user from '../../Assets/user.svg';
import shoppingbag from '../../Assets/shopping-bag.svg';
import venia from '../../Assets/venia.png';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


















function Navbar() {

   const st = useSelector((state) => {
      // console.log(state);
      return state.handlecartSlice.items;
    });
    const totalcartitem = st.length;
    console.log(totalcartitem);

   const navItem = ['Women', 'Men', 'Smart Gear', 'Accessories'];
    return (


<React.Fragment>
       <header role="header" id='header'>
   
          <div className='aem-Grid aem-Grid--12 header-start'>
            <button className="burger">
            <div id="line1"></div>
            <div id="line2"></div>
            <div id="line3"></div>
            </button>

           <div className='aem-GridColumn aem-GridColumn--phone--6  aem-GridColumn--tablet--12 aem-GridColumn--default--4'>
              <NavLink to="/venia-site/">
              <img src={venia}/>
              </NavLink>
           </div>

           </div>
           <div className='aem-GridColumn aem-GridColumn--phone--6  aem-GridColumn--tablet--12 aem-GridColumn--default--4 nav-link'>
            <nav role="navigation">
            <ul>
               {
                  navItem.map((item)=>{
                     return <li>
                     <a href='' aria-label='see all products'>{item}</a>
                     </li>
                    })
               }
            </ul>
            </nav>
           </div>
           <div className='aem-GridColumn aem-GridColumn--phone--6  aem-GridColumn--tablet--12 aem-GridColumn--default--4 header-end'>
           <ul>
               <img src={search} alt='search-icon'/>
               <label for="searchBar">Search</label>
               <img src={user} alt='user-icon'/>
               <a aria-label='Go to Sign in'>Sign In</a>
              
               <NavLink to="/venia-site/shoppingcart" >
               <li><img src={shoppingbag} alt='shopping-bag-icon'/>{totalcartitem}</li>
               </NavLink>
            </ul>
        
           </div>
           
         
            {/* <hr /> */}
         
       </header>
       
       </React.Fragment>
  )
}

export default Navbar;