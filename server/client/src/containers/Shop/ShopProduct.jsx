import React from "react";
import { useSelector } from "react-redux";

import Loading from "../../components/Common/Loading/Loading";
import LoadMore from "./LoadMore";
import ShopProductSingle from "./ShopProductSingle";

const ShopProduct = ({ page, setPage }) => {
  const { products, loading } = useSelector((state) => state.allProducts);
  return (
    // reuse css class
    <section className="featured container-div">
      <div className="featured__container">
        <div className="featured__products grid">
          <>
            {loading ? (
              <Loading />
            ) : (
              <>
                {products?.products &&
                  products?.products?.map((product, i) => {
                    return <ShopProductSingle product={product} />;
                  })}
              </>
            )}

            {products?.result === 0 && (
              <h4 className="featured__products__notFound">
                No Products Found.
              </h4>
            )}
          </>
        </div>
        <LoadMore page={page} setPage={setPage} />

        {/* paignation */}

        {/* <div className="featured__button">
          <button className="button">View Products</button>
        </div> */}

        {/* {totalProducts >= 8 && (
          <div className="d-flex justify-content-center text-center mt-4">
            <Pagination
            //   handlePagenationChangeSubmit={filterProducts}
            //   products={products}
            //   pages={pages}
            //   page={pageNumber}
            />
          </div>
        )} */}
      </div>
    </section>
  );
};

export default ShopProduct;
