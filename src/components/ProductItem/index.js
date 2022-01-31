import React from "react";
import PropTypes from "prop-types";

const ProductItem = (props) => {
  const { product, selectItem } = props;
  return (
    <div className="card" onClick={()=> selectItem(product.id)}>
      <div className="img-thumbnail">
        <img src={product.imageUrl} className="card-img-top img-fluid" alt="..." />
      </div>
      <div className="card-body">
        <h6 className="card-title">{product.name}</h6>
      </div>
    </div>
  );
};
export default ProductItem;
