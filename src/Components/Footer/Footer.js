import React from 'react';
import instagram from '../../Assets/instagram.svg';
import facebook from '../../Assets/facebook.svg';
import twitter from '../../Assets/twitter.svg'
import VENIA2 from '../../Assets/VENIA2.png';

function Footer() {
    return (
        <footer>
            <div className='demo-GridRowExample-markup'>
                <div className='aem-Grid aem-Grid--default--12 aem-Grid--tablet--6 aem-Grid--phone--1 demo-Grid footer-first '>
                    <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--1 demo-GridColumn demo-GridColumn--image'>
                        <h4>Account</h4>
                        <a href='#'>  <li>Sign In</li></a>
                        <a href='#'>  <li>Register</li></a>
                        <a href='#'>   <li>Order Status</li></a>
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--1 demo-GridColumn demo-GridColumn--image'>
                        <h4>About Us</h4>
                        <a href='#'>   <li>Our Story</li></a>
                        <a href='#'>  <li>Careers</li></a>
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--1 demo-GridColumn demo-GridColumn--image'>
                        <h4>Help</h4>
                        <a href='#'>   <li>Contact Us</li></a>
                        <a href='#'>  <li>Order Status</li></a>
                        <a href='#'>  <li>Returns</li></a>
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--1 demo-GridColumn demo-GridColumn--image'>
                        <h4>Follow Us!</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        <div className='img-logo'>
                            <a href='#' aria-label='instagram-logo'><li><img src={instagram} /></li></a>
                            <a href='#' aria-label='facebook-logo'><li><img src={facebook} /></li></a>
                            <a href='#' aria-label='twitter-logo'><li><img src={twitter} /></li> </a>
                        </div>
                    </div>
                </div>
                <hr />
              
                    <div className='footer-last'>

                        <img src={VENIA2} />


                        <p>© Company Name Address Ave, City Name, State ZIP</p>

                        <div className='footer-bottom'>
                            <a href='#'>Terms of Use</a>
                            <a href='#'>Privacy Policy</a>
                        </div>
                    </div>
               

            </div>
        </footer>
    );

}

export default Footer; 