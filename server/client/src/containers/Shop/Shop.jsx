import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import SelectOption from "../../components/Common/SelectOption/SelectOption";
import Footer from "../Footer/Footer";
import { fetchProducts } from "../../redux/actions/productAction";
import ShopProduct from "./ShopProduct";

const Shop = ({ props }) => {
  const dispatch = useDispatch();
  //   const { products, advancedFilters, filterProducts } = props;
  //   const { totalProducts, pageNumber, pages, order } = advancedFilters;

  // const totalProducts = 15;
  // const pageNumber = 1;

  // const sortOptions = [
  //   { value: 0, label: "Newest First" },
  //   { value: 1, label: "Price High to Low" },
  //   { value: 2, label: "Price Low to High" },

  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchProducts(page, category, sort, search));
  }, [dispatch, page, category, sort, search]);

  const handleCategory = (e) => {
    setCategory(e.target.value);
    setSearch("");
  };
  // ];
  return (
    <>
      <div className="shop section container-div">
        <div className="shop__filter">
          {/* <div className="row">
            <span>Filters: </span>
            <select name="category" value={category} onChange={handleCategory}>
              <option value="">All Products</option>
              {categories.map((category) => (
                <option value={"category=" + category._id} key={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div> */}

          <input
            type="text"
            value={search}
            placeholder="Enter your search!"
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="shop__filter__select">
            <div>
              <b>Sort by: </b>
            </div>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="">Newest</option>
              <option value="sort=oldest">Oldest</option>
              <option value="sort=-sold">Best sales</option>
              <option value="sort=-price">Price: Hight-Low</option>
              <option value="sort=price">Price: Low-Hight</option>
            </select>
          </div>
        </div>
        {/* <div className="shop__heading">
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
        </div> */}

        <ShopProduct />
      </div>
      <Footer />
    </>
  );
};

export default Shop;
