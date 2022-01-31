import React, { useEffect, useState } from "react";
import ContentWrapper from "./components/ContentWrapper";
import LeftSideBar from "./components/LeftSideBar";

const PosSystemInterface = () => {
  const [products, setProducts] = useState([
    {
      id: "IT01",
      name: "Canon 1100d",
      price: 2250.00,
      imageUrl: "https://via.placeholder.com/80",
    },
    {
      id: "IT02",
      name: "Computer set 1",
      price: 2500.00,
      imageUrl: "https://via.placeholder.com/80",
    },
    {
      id: "IT03",
      name: "Computer set 1",
      price: 1799.0,
      imageUrl: "https://via.placeholder.com/80",
    },
    {
      id: "IT04",
      name: "Hard Disk",
      price: 470.0,
      imageUrl: "https://via.placeholder.com/80",
    },
    {
      id: "IT05",
      name: "Keyboard",
      price: 1500.0,
      imageUrl: "https://via.placeholder.com/80",
    },
    {
      id: "IT06",
      name: "Laptop",
      price: 2220.00,
      imageUrl: "https://via.placeholder.com/80",
    },
    {
      id: "IT07",
      name: "Mouse",
      price: 150.00,
      imageUrl: "https://via.placeholder.com/80",
    },
    {
      id: "IT08",
      name: "Ram",
      price: 2800.00,
      imageUrl: "https://via.placeholder.com/80",
    },
  ]);
  const [billedItems, setBilledItems] = useState([]);
  const selectItem = (id) => {
    let allBilledItems = [...billedItems];
    var index = allBilledItems.findIndex((item) => item.id === id);
    if (index === -1) {
      let filterSelectItem = products.filter((item) => item.id === id)[0];
      filterSelectItem["isEdit"] = false;
      filterSelectItem["quantity"] = 1;
      allBilledItems.unshift(filterSelectItem);
      setBilledItems(allBilledItems);
    }
  };
  const editProductSelectItem = (id) => {
    let allBilledItems = [...billedItems];
    let editItemIndex = allBilledItems.findIndex((item) => item.id === id);

    allBilledItems[editItemIndex].isEdit = true;
    setBilledItems(allBilledItems);
  };

  const updateProductQuantity = (event, id) => {
    let allBilledItems = [...billedItems];
    let editItemIndex = allBilledItems.findIndex((item) => item.id === id);

    allBilledItems[editItemIndex].quantity = event.target.value;
    setBilledItems(allBilledItems);
  };

  const removeSelectItemHandler = (id) => {
    let allBilledItems = [...billedItems];
    let filterSelectItems = allBilledItems.filter((item) => item.id !== id);
    
    setBilledItems(filterSelectItems);
  };
  useEffect(() => {}, []);

  return (
    <div className="container-fluid page-wrapper">
      <div className="row">
        <LeftSideBar
          billedItems={billedItems}
          removeSelectItemHandler={removeSelectItemHandler}
          editProductSelectItem={editProductSelectItem}
          updateProductQuantity={updateProductQuantity}
        />
        <ContentWrapper productData={products} selectItem={selectItem} />
      </div>
    </div>
  );
};

export default PosSystemInterface;
