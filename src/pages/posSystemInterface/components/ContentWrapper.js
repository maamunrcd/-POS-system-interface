import React from "react";
import PropTypes from "prop-types";
import Products from "../../../components/products";
import {
  AiOutlineLeft, AiOutlineRight
} from "react-icons/ai";
const ContentWrapper = (props) => {
  const { productData, selectItem } = props;
  return (
    <div className="col-8">
      <div className="wrapper h-100">
        <div className="row flex-column justify-content-between h-100">
          <Products productData={productData} selectItem={selectItem}/>
          <div className="row">
            <div className="btn-group order-actions" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-secondary">
              <AiOutlineLeft/>
              </button>
              <button type="button" className="btn btn-primary">
                Sell Gift Card
              </button>
              <button type="button" className="btn btn-secondary">
              <AiOutlineRight/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
ContentWrapper.propTypes = {
  productData: PropTypes.object,
  selectItem: PropTypes.func,
};
export default ContentWrapper;
