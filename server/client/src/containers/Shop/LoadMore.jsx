import React from "react";
import { useSelector } from "react-redux";

const LoadMore = ({ page, setPage }) => {
  //   const state = useContext(GlobalState);
  //   const [page, setPage] = state.productsApiData.page;
  //   const [result] = state.productsApiData.result;
  const { products } = useSelector((state) => state.allProducts);
  return (
    <div className="featured__products__load-more">
      {products?.result < page * 8 ? (
        ""
      ) : (
        <button className="button-secondary" onClick={() => setPage(page + 1)}>
          Load more
        </button>
      )}
    </div>
  );
};

export default LoadMore;
