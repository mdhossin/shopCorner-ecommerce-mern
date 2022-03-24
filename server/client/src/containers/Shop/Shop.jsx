import React from "react";

import SelectOption from "../../components/Common/SelectOption/SelectOption";
import Footer from "../Footer/Footer";

import ShopProduct from "./ShopProduct";

const Shop = ({ props }) => {
  //   const { products, advancedFilters, filterProducts } = props;
  //   const { totalProducts, pageNumber, pages, order } = advancedFilters;

  const totalProducts = 15;
  const pageNumber = 1;

  const sortOptions = [
    { value: 0, label: "Newest First" },
    { value: 1, label: "Price High to Low" },
    { value: 2, label: "Price Low to High" },
  ];
  return (
    <>
      <div className="shop section container-div">
        <div className="shop__heading">
          <div className="shop__heading__showing">
            <div>
              <b>Showing: </b>
              {`${
                totalProducts < 8
                  ? totalProducts
                  : 8 * pageNumber - 8 === 0
                  ? 1
                  : 8 * pageNumber - 8 + 1
              } – ${
                totalProducts < 8
                  ? totalProducts
                  : 8 * pageNumber < totalProducts
                  ? 8 * pageNumber
                  : totalProducts
              } products of ${totalProducts} products`}
            </div>
          </div>

          <div className="shop__heading__filter">
            <div className="shop__heading__filter__product">
              <b>Sort by:</b>
              <SelectOption
                name={"sorting"}
                // value={{ value: order, label: sortOptions[order].label }}
                options={sortOptions}
                handleSelectChange={(n, v) => {
                  //   filterProducts("sorting", n.value);
                }}
              />
            </div>
          </div>
        </div>

        <ShopProduct />
      </div>
      <Footer />
    </>
  );
};

export default Shop;
