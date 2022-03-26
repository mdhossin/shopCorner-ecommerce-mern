import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import Footer from "../Footer/Footer";
import ProductRating from "../../components/Common/ProductRating/ProductRating";
import { getProductById } from "../../redux/actions/productAction";
import Loading from "../../components/Common/Loading/Loading";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { product, loading } = useSelector((state) => state.productById);

  useEffect(() => {
    dispatch(getProductById(productId));
  }, [productId, dispatch]);

  return (
    <>
      <section className="container-div section product">
        {loading ? (
          <Loading />
        ) : (
          <div className="product__detail grid">
            <div className="product__detail__img">
              <img src={product?.images?.url} alt="" />
            </div>

            <div className="product__detail__info">
              <h2 className="product__detail__info-name">{product.name}</h2>

              <div className="product__detial__info__price">
                <span className="product__detail__info__price-count">
                  ${product.price}.00
                </span>
              </div>
              <div className="product__detail__info-rating">
                <ProductRating ratingValue={product.ratings} />(
                {product.ratings})
              </div>

              <div className="product__detail__info__buttons">
                <div className="product__detail__info__buttons-quantity">
                  <button className="minus">-</button>
                  <div className="count">0</div>
                  <button className="add">+</button>
                </div>
                <div className="product__detail__info__buttons-add">
                  <button>Add</button>
                </div>
                <div className="product__detail__info__buttons-wishlist">
                  <button>
                    <AiOutlineHeart />
                  </button>
                </div>
              </div>

              <div className="product__detail__info-desc">
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default ProductDetail;
