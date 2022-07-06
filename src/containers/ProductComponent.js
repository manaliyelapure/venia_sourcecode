import React,{useState} from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import heart from '../Assets/heart.svg';
import Pagination from '../containers/Pagination';

const ProductComponent = ({products,filtercomponent}) => {
  const [showperpage] = useState(6)

    const [pagination, stePegination] = useState({

        start: 0,

        end: showperpage,

    })

    const onPaginationChange = (start, end) => {

        stePegination({ start: start, end: end })

    }

    const onFilterSelect = (e) => {

      console.log('onFilterSelect', filtercomponent);

      filtercomponent(e.target.value);

  }



  const renderList = products.slice(pagination.start, pagination.end).map((product) => {
    const { id, title, image, price } = product;
    let path = `/venia-site/products/${id}`;
    return (
    
      <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--6 aem-GridColumn--tablet--6" key={id}>





        <Link to={path}>
{/* 
        <select name="" id="" onChange={onFilterSelect}>

<option value="Sort by list">Sort by list</option>

<option value="category">Sort by Price</option>

</select> */}

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
return(
    <>{renderList} <div className="page-funtion">

  <Pagination showperpage={showperpage} onPaginationChange={onPaginationChange} />
  
  </div></> 
) 




 
  
};

export default ProductComponent;
