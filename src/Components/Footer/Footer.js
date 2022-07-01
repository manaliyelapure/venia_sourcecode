import React from 'react';
import instagram from '../../Assets/instagram.svg';
import facebook from '../../Assets/facebook.svg';
import twitter from '../../Assets/twitter.svg';
import VENIA2 from  '../../Assets/VENIA2.png';

function Footer() {
  return (
   <React.Fragment>
    <footer>
    <div className='aem-Grid aem-Grid--12 ' >
    <div className='aem-GridColumn aem-GridColumn--default--3 footer aem-GridColumn--phone--6 aem-GridColumn--tablet--6 footer-first'>
           <h3>Account</h3>
          <ul>
        <li>Sign In</li>
        <li>Register</li>
        <li>Order Status</li>
          </ul>
    </div>
    <div className='aem-GridColumn aem-GridColumn--default--3 footer aem-GridColumn--phone--6 aem-GridColumn--tablet--6 footer-first'  >
           <h3>About Us</h3>
           <ul>
        <li>Our Story</li>
        <li>Careers</li>
     
          </ul>
    </div>
    <div className='aem-GridColumn aem-GridColumn--default--3 footer aem-GridColumn--phone--6 aem-GridColumn--tablet--6 footer-first' >
           <h3>Help</h3>
           <ul>
        <li>Contact Us</li>
        <li>Order Status</li>
        <li>Returns</li>
          </ul>
    </div>
    <div className='aem-GridColumn aem-GridColumn--default--3 footer aem-GridColumn--phone--6 aem-GridColumn--tablet--6'>
           <h3>Follow Us!</h3>
           <ul >
        <li>Lorem ipsum dolor sit amet, consectetur <br />
        adipiscing elit, sed do eiusmod tempor <br /> 
        incididunt ut labore et dolore.</li>
        <li className='img-logo'>
        <img src={instagram} alt='instagram-logo'/>
        <img src={facebook} alt='facebook-logo'/>
        <img src={twitter} alt='twitter-logo'/>
        </li>
        
          </ul>
    </div>
   <hr />

    <div className='aem-GridColumn aem-GridColumn--default--4 footer-bottom'>
          <img src={VENIA2}/>
          
    </div>

    
    <div className='aem-GridColumn aem-GridColumn--default--4 footer-bottom'>
         <p>© Company Name Address Ave, City Name, State ZIP</p>
          
    </div>

    <div className='aem-GridColumn aem-GridColumn--default--4'>
    <ul className='footer-bottom'>
        <li>
        <a href='#'>Terms of Use</a>
        <a href='#'>Privacy Policy</a>
        </li>
     
          </ul>
          
    </div>
    </div>
  

    </footer>

   </React.Fragment>
  )
}

export default Footer