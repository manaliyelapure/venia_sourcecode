import React from 'react';
import banner from '../Banner/banner.png';


function Banner
  () {
  return (
    <React.Fragment>
      <section className='container'>
        <div className='banner'>

          <span className='banner-left'>
            <h1>Women’s <span>Outerwear</span></h1>
            <div className='banner-bottom'></div>
          </span>

          <img src={banner} alt="banner-image" aria-label='banner-img'/>


        </div>
      </section>
    </React.Fragment>
  )
}

export default Banner
