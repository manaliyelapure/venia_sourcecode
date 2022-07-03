
import React, { Component } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../Assets/img-1.png";
import img2 from '../Assets/img-2.png';
import img3 from '../Assets/img-3.png';
import img4 from '../Assets/img-4.png';




export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
    };
    return (
      <div className="aem-Grid aem-Grid--12 view">
        <h2> Recently Viewed </h2>
        <Slider {...settings}>
          <div className="aem-GridColumn aem-GridColumn--default--3">
           <img src={img1}/>
          </div>
          <div className="aem-GridColumn aem-GridColumn--default--3">
          <img src={img1}/>
          </div>
          <div className="aem-GridColumn aem-GridColumn--default--3">
          <img src={img1}/>
          </div>
          <div className="aem-GridColumn aem-GridColumn--default--3">
          <img src={img1}/>
          </div>
          
        </Slider>
      </div>
    );
  }
}