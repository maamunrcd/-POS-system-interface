import React from "react";
import ProductItem from "../ProductItem";
import PropTypes from "prop-types";

const Products = (props) => {
  const { productData, selectItem } = props;
  return (
    <div className="product-list col-12">
      <div className="row">
        {productData &&
          productData.map((item) => (
            <div className="col-2 mt-2">
              <ProductItem product={item} selectItem={selectItem} />
            </div>
          ))}
      </div>
    </div>
  );
};

Products.propTypes = {
  productData: PropTypes.object,
  selectItem: PropTypes.func,
};
export default Products;
