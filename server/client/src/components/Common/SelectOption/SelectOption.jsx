/**
 *
 * SelectOption
 *
 */

import React from "react";

import Select from "react-select";
import makeAnimated from "react-select/animated";

const SelectOption = (props) => {
  const {
    disabled,
    error,
    label,
    multi,
    options,
    defaultValue,
    value,
    handleSelectChange,
  } = props;

  const _handleSelectChange = (value) => {
    handleSelectChange(value);
  };

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
