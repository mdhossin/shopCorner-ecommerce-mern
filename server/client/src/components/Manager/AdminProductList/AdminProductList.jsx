import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Loading from "../../Common/Loading/Loading";
import AdminSingleProduct from "../AdminSingleProduct/AdminSingleProduct";

const AdminProductList = () => {
  const { products, loading } = useSelector((state) => state.allProducts);
  return (
    // reuse css class
    <section className="featured container-div">
      <div className="featured__container">
        <h2>All Products</h2>

        <div className="featured__products grid">
          <>
            {loading ? (
              <Loading />
            ) : (
              <>
                {products.products &&
                  products?.products?.map((product, i) => {
                    return <AdminSingleProduct key={i} product={product} />;
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

export default AdminProductList;
