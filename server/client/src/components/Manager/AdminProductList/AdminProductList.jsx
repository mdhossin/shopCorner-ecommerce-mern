import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAdminProduct } from "../../../redux/actions/productAction";

import Loading from "../../Common/Loading/Loading";
import AdminSingleProduct from "../AdminSingleProduct/AdminSingleProduct";

const AdminProductList = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.adminProducts);

  // const { loading } = useSelector((state) => state?.createProduct);
  const { loading: deleteLoading } = useSelector(
    (state) => state?.deleteProduct
  );

  useEffect(() => {
    dispatch(getAdminProduct());
  }, [dispatch, deleteLoading]);
  return (
    // reuse css class
    <section className="featured container-div">
      <div className="featured__container">
        <h2 style={{ marginBottom: "2rem" }}>All Products</h2>

        <div className="featured__products grid">
          <>
            {loading ? (
              <Loading />
            ) : (
              <>
                {products &&
                  products?.map((product, i) => {
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
