import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import heart from '../Assets/heart.svg';

const ProductComponent = ({products}) => {
  
  // console.log(products);
  // const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price } = product;
    let path = `/venia-site/products/${id}`;
    return (
      
      <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--6 aem-GridColumn--tablet--6" key={id}>
        <Link to={path}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta"><img src={heart} /></div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
