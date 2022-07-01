import React from 'react';
import banner from '../Banner/banner.png';


function Banner
  () {
  return (
    <React.Fragment>
      <section className='container'>
        <div className='aem-Grid aem-Grid--12 banner'>
          <div className='aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--6 aem-GridColumn--default--5'>
            <div className='banner-left'>
              <h1>Women’s <span>Outerwear</span></h1>
              <div className='banner-bottom'></div>
            </div>

          </div>
          <div className='aem-GridColumn  aem-GridColumn--phone--12  aem-GridColumn--tablet--6 aem-GridColumn--default--7 banner-right'>
            <img src={banner}/>
          </div>

        </div>
      </section>
    </React.Fragment>
  )
}

export default Banner
