import React, { useState, useEffect } from "react";
import {
  AiOutlinePlus,
  AiOutlineEye,
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineComment,
  AiOutlineCreditCard
} from "react-icons/ai";

import PropTypes from "prop-types";
import DataTable from "../../../components/DataTable";
const LeftSideBar = (props) => {
  const {
    billedItems,
    removeSelectItemHandler,
    editProductSelectItem,
    updateProductQuantity,
  } = props;
  const [payableAmount, setPayableAmount] = useState(0.0);

  useEffect(() => {
    let amountToPay =
      billedItems &&
      billedItems.reduce(function (accumulator, item) {
        return accumulator + item.price * item.quantity;
      }, 0.0);
    setPayableAmount(amountToPay.toFixed(2));
  }, [billedItems]);

  return (
    <div className="col-4 h-100">
      <div className="wrapper pt-2 pb-2 h-100">
        <div className="warehouse-actions">
          <div className="walk-customer mb-1">
            <div className="input-group">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Walk-in Customer</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <span className="input-group-text icon" id="basic-addon2">
                <AiOutlinePlus />
                <AiOutlineEye />
                <AiOutlineEdit />
              </span>
            </div>
          </div>
          <div className="warehouse-list mb-1">
            <select className="form-select" aria-label="Default select example">
              <option selected>Warehouse 1</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="search-product mb-1">
            <div className="input-group">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Scan/Search product by name/code</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <span className="input-group-text icon" id="basic-addon2">
                <AiOutlinePlus />
              </span>
            </div>
          </div>
        </div>
        <DataTable className="table table-striped table-hover table-bordered billedItemTable">
          <thead>
            <tr>
              <th scope="col" width="35%">
                Product
              </th>
              <th scope="col" width="15%">
                Price
              </th>
              <th scope="col" width="25%">
                Qty
              </th>
              <th scope="col" width="15%">
                Subtotal
              </th>
              <th scope="col" width="10%">
                <span className="icon">
                  <AiOutlineDelete />
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {billedItems &&
              billedItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="d-flex justify-content-between">
                      <div>{item.name}</div>
                      <div className="icon">
                        <span onClick={() => editProductSelectItem(item.id)}>
                          <AiOutlineEdit />
                        </span>
                        <AiOutlineComment />
                      </div>
                    </div>
                  </td>
                  <td>{item.price}</td>
                  <td>
                    <input
                      type="number"
                      onChange={(e) => updateProductQuantity(e, item.id)}
                      value={item.quantity}
                      readOnly={!item.isEdit}
                      className="form-control"
                      placeholder="name@example.com"
                    />
                  </td>
                  <td>{item.price.toFixed(2)}</td>
                  <td>
                    <span
                      className="icon"
                      onClick={() => removeSelectItemHandler(item.id)}
                    >
                      <AiOutlineDelete />
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </DataTable>
        <div className="product-summery">
          <div className="order-info bg-white p-2">
            <div className="row">
              <div className="col-6">
                <div className="d-flex justify-content-between">
                  <span>Items</span>
                  <span>
                    <strong>{`${
                      billedItems.length
                    } (${billedItems.length.toFixed(2)})`}</strong>
                  </span>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex justify-content-between">
                  <span>Total</span>
                  <span>
                    <strong>{payableAmount}</strong>
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="d-flex justify-content-between">
                  <span>
                    Order Tax
                    <span className="icon">
                      <AiOutlineEdit />
                    </span>
                  </span>
                  <span>
                    <strong>0.00</strong>
                  </span>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex justify-content-between">
                  <span>
                    Discount
                    <span className="icon">
                      <AiOutlineEdit />
                    </span>
                  </span>
                  <span>
                    <strong>(0.00) 0.00</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-between bg-black text-white p-2">
                <span>Total Payable</span>
                <span>
                  <strong>{payableAmount}</strong>
                </span>
              </div>
            </div>
          </div>
          <div className="row order-action-wrapper">
            <div className="col-8">
              <div
                class="btn-group d-flex flex-wrap order-actions"
                role="group"
                aria-label="Basic example"
              >
                <button type="button" class="btn btn-warning w-50">
                  Suspend
                </button>
                <button type="button" class="btn btn-secondary w-50">
                  Order
                </button>
                <button type="button" class="btn btn-danger w-50">
                  Cancel
                </button>
                <button type="button" class="btn btn-primary w-50">
                  Bill
                </button>
              </div>
            </div>
            <div className="col-4">
              <button type="button" class="btn btn-success w-100 h-100">
                  <span className="p2 d-inline-block">
                    <AiOutlineCreditCard/>
                  </span>
                  Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

LeftSideBar.propTypes = {
  billedItems: PropTypes.array,
  removeSelectItemHandler: PropTypes.func,
  editProductSelectItem: PropTypes.func,
};

export default LeftSideBar;
