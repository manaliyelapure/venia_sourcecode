



// function Footer() {
//   return (
//    <React.Fragment>
//     <footer>
//     <div className='demo-GridRowExample-markup'>
//     <div className='aem-Grid aem-Grid--12 aem-Grid--tablet--6 aem-Grid--phone--1 ' >
//     <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--1 demo-GridColumn footer-first'>
//            <h3>Account</h3>
//           <ul>
//           <a href='#'> <li>Sign In</li></a>
//           <a href='#'> <li>Register</li></a>
//           <a href='#'> <li>Order Status</li></a>
//           </ul>
//     </div>
//     <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--1 demo-GridColumn footer-first'  >
//            <h3>About Us</h3>
//            <ul>
       
//            <a href='#'><li>Our Story</li></a>
//            <a href='#'><li>Careers</li></a>
//            <a href='#'><li className='demohide'>Demo</li></a>
     
//           </ul>
//     </div>
//     <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--1 demo-GridColumn footer-first' >
//           <h3>Help</h3>
//           <ul>
//           <a href='#'><li>Contact Us</li></a>
//         <a href='#'><li>Order Status</li></a>
//         <a href='#'><li>Returns</li></a> 
//           </ul>
//     </div>
//     <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--1 demo-GridColumn footer-first'>
//            <h3>Follow Us!</h3>
//            <ul >
//         <li>Lorem ipsum dolor sit amet, consectetur <br />
//         adipiscing elit, sed do eiusmod tempor <br /> 
//         incididunt ut labore et dolore.</li>
//           <li className='img-logo'>
//           <a href='#'><img src={instagram} alt='instagram-logo'/></a>
//           <a href='#'><img src={facebook} alt='facebook-logo'/></a>
//           <a href='#'> <img src={twitter} alt='twitter-logo'/></a>
//         </li>
     
        
//           </ul>
//     </div>
//     </div>
//     </div>
// <div className='f-bottom aem-Grid aem-Grid--12'>
//     <div className='aem-GridColumn aem-GridColumn--default--4 footer-bottom'>
//           <img src={VENIA2}/>
          
//     </div>

    
//     <div className='aem-GridColumn aem-GridColumn--default--4 footer-bottom'>
//          <p>© Company Name Address Ave, City Name, State ZIP</p>
          
//     </div>

//     <div className='aem-GridColumn aem-GridColumn--default--4'>
//     <ul className='footer-bottom'>
//         <li>
//         <a href='#'>Terms of Use</a>
//         <a href='#'>Privacy Policy</a>
//         </li>
     
//     </ul>
          
//     </div>

//   </div>
  
 

//     </footer>

//    </React.Fragment>
//   )
// }

// export default Footer;




import React from 'react';
import instagram from '../../Assets/instagram.svg';
import facebook from '../../Assets/facebook.svg';
import twitter from '../../Assets/twitter.svg'
import VENIA2 from  '../../Assets/VENIA2.png';

function Footer() {
    return (
        <footer>
        <div className='demo-GridRowExample-markup'>
            <div className='aem-Grid aem-Grid--default--12 aem-Grid--tablet--6 aem-Grid--phone--1 demo-Grid footer-first '>
                <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--1 demo-GridColumn demo-GridColumn--image'>
                    <h4>Account</h4>
                    <li>Sign In</li>
                    <li>Register</li>
                    <li>Order Status</li>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--1 demo-GridColumn demo-GridColumn--image'>
                    <h4>About Us</h4>
                    <li>Our Story</li>
                    <li>Careers</li>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--1 demo-GridColumn demo-GridColumn--image'>
                    <h4>Help</h4>
                    <li>Contact Us</li>
                    <li>Order Status</li>
                    <li>Returns</li>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--1 demo-GridColumn demo-GridColumn--image'>
                    <h4>Follow Us!</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <div className='img-logo'>
                         <li><img src={instagram} /></li>
                        <li><img src={facebook} /></li>
                        <li><img src={twitter} /></li> 
                    </div>
                </div>
            </div>
            <hr />
            <div className='demo-GridRowExample-markup'>
                <div className='aem-Grid aem-Grid--12 aem-Grid--tablet--6 aem-Grid--phone--1 demo-Grid'>
                <div className='aem-GridColumn aem-GridColumn--default--3 aem-Grid--tablet--6 aem-GridColumn--phone--hide aem-Grid--phone--1  demo-GridColumn demo-GridColumn--separator footer-bottom'>
                    <img src={VENIA2} />
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--6 aem-Grid--tablet--6 aem-Grid--phone--1 demo-GridColumn demo-GridColumn--separator footer-bottom'>
                    <p>© Company Name Address Ave, City Name, State ZIP</p>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--3 aem-Grid--tablet--6 aem-Grid--phone--1 demo-GridColumn demo-GridColumn--separator footer-bottom'>
                    <a href='#'>Terms of Use</a>
                    <a href='#'>Privacy Policy</a>
                </div>
            </div>
            </div>
            
        </div>
        </footer>
    );

}

export default Footer; 