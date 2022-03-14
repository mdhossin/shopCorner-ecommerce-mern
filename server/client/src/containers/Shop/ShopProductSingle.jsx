import React from "react";
import { Link } from "react-router-dom";
// import { useToasts } from "react-toast-notifications";

import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineEye,
} from "react-icons/ai";
import ProductRating from "../../components/Common/ProductRating/ProductRating";

const ShopProductSingle = ({
  product,
  currency,

  cartItem,
  wishlistItem,
  compareItem,
  sliderClassName,
  spaceBottomClass,
}) => {
  //   const { addToast } = useToasts();
  const discountedPrice = product.price;
  //   const discountedPrice = getDiscountPrice(product.price, product.discount);
  const finalProductPrice = +(
    product.price * /* currency.currencyRate */ 12
  ).toFixed(2);
  const finalDiscountedPrice = +(
    discountedPrice * /* currency.currencyRate */ 3
  ).toFixed(2);

  //col-xl-3 col-md-6 col-lg-4 col-sm-6

  return (
    <>
      <div
        className={`product-wrap ${spaceBottomClass ? spaceBottomClass : ""}`}
      >
        <div className="product-img">
          <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
            <img
              className="default-img"
              src={process.env.PUBLIC_URL + product.image}
              alt=""
            />
          </Link>
          {product.discount || product.newProduct ? (
            <div className="product-img-badges">
              {product.discount ? (
                <span className="pink">-{product.discount}%</span>
              ) : (
                ""
              )}
              {product.newProduct ? <span className="purple">New</span> : ""}
            </div>
          ) : (
            ""
          )}

          <div className="product-action">
            <div className="pro-same-action pro-wishlist">
              <button
                className={wishlistItem !== undefined ? "active" : ""}
                disabled={wishlistItem !== undefined}
                title={
                  wishlistItem !== undefined
                    ? "Added to wishlist"
                    : "Add to wishlist"
                }
                //   onClick={() => addToWishlist(product, addToast)}
              >
                <AiOutlineHeart className="pe-7s-like" />
              </button>
            </div>
            <div className="pro-same-action pro-cart">
              {product.affiliateLink ? (
                <a
                  href={product.affiliateLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  Buy now{" "}
                </a>
              ) : product?.variation && product?.variation.length >= 1 ? (
                <Link to={`${process.env.PUBLIC_URL}/product/${product.id}`}>
                  Select Option
                </Link>
              ) : product?.stock && product?.stock > 0 ? (
                <button
                  // onClick={() => addToCart(product, addToast)}
                  className={
                    cartItem !== undefined && cartItem?.quantity > 0
                      ? "active"
                      : ""
                  }
                  disabled={cartItem !== undefined && cartItem.quantity > 0}
                  title={
                    cartItem !== undefined ? "Added to cart" : "Add to cart"
                  }
                >
                  {" "}
                  <AiOutlineShoppingCart />
                  {cartItem !== undefined && cartItem.quantity > 0
                    ? "Added"
                    : "Buy Now"}
                </button>
              ) : (
                <button disabled className="active">
                  Out of Stock
                </button>
              )}
            </div>
            <div className="pro-same-action pro-quickview">
              <button title="Quick View">
                <AiOutlineEye />
              </button>
            </div>
          </div>
        </div>
        <div className="product-content text-center">
          <h3>
            <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
              {product.name}
            </Link>
          </h3>
          {product.rating && product.rating > 0 ? (
            <div className="product-rating">
              <ProductRating ratingValue={product.rating} />
            </div>
          ) : (
            ""
          )}
          <div className="product-price">
            {discountedPrice !== null ? (
              <>
                {/* <span>{currency.currencySymbol + finalDiscountedPrice}</span> */}
                <span>$ {finalDiscountedPrice}</span>
                <span className="old"> $ {finalProductPrice}</span>
              </>
            ) : (
              <span>৳ {finalProductPrice} </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopProductSingle;
