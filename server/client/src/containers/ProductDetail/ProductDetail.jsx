import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineHeart } from "react-icons/ai";
import Footer from "../Footer/Footer";
import ProductRating from "../../components/Common/ProductRating/ProductRating";

const ProductDetail = () => {
  const { productId } = useParams();
  const { products } = useSelector((state) => state.allProducts?.products);
  console.log(products);

  const [detailProduct, setDetailProduct] = useState([]);
  console.log(detailProduct);

  useEffect(() => {
    console.log("re-render");
    if (productId) {
      products?.forEach((product) => {
        if (product._id === productId) setDetailProduct(product);
      });
    }
  }, [productId, products]);

  console.log(detailProduct, "id");
  return (
    <>
      <section className="container-div section product">
        <div className="product__detail grid">
          <div className="product__detail__img">
            <img src={detailProduct.imageUrl} alt="" />
          </div>

          <div className="product__detail__info">
            <h2 className="product__detail__info-name">{detailProduct.name}</h2>

            <div className="product__detial__info__price">
              <span className="product__detail__info__price-count">
                ${detailProduct.price}.00
              </span>
            </div>
            <div className="product__detail__info-rating">
              <ProductRating ratingValue={detailProduct.ratings} />(
              {detailProduct.ratings})
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
              <p>{detailProduct.description}</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetail;
