import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Loading from "../../components/Common/Loading/Loading";
import {
  fetchProducts,
  getAdminProduct,
} from "../../redux/actions/productAction";

import FeaturedSingle from "./FeaturedSingle/FeaturedSingle";

const FeaturedProduct = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.adminProducts);

  // const { loading } = useSelector((state) => state?.createProduct);
  // const { loading: deleteLoading } = useSelector(
  //   (state) => state?.deleteProduct
  // );
  // console.log(products);

  useEffect(() => {
    dispatch(getAdminProduct());
  }, [dispatch]);

  return (
    <section className="featured container-div">
      <div className="featured__container">
        <h2 className="featured__title">Featured Products</h2>

        <div className="featured__products grid">
          <>
            {loading ? (
              <Loading />
            ) : (
              <>
                {products &&
                  products?.slice(0, 8).map((product, i) => {
                    return <FeaturedSingle key={i} product={product} />;
                  })}
              </>
            )}
          </>
        </div>

        <div className="featured__button">
          <Link to="/shop">
            <button className="button">View Products</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
