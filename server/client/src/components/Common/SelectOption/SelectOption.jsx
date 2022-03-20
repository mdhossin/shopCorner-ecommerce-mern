/**
 *
 * SelectOption
 *
 */

import React from "react";

const SelectOption = (props) => {
  return (
    <select
      className="shop__heading__filter__product__select"

      // onChange={e => getFilterSortParams("filterSort", e.target.value)}
    >
      <option value="default">Default</option>
      <option value="priceHighToLow">Price - High to Low</option>
      <option value="priceLowToHigh">Price - Low to High</option>
    </select>
  );
};

export default SelectOption;
