import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
// import { useToasts } from "react-toast-notifications";

import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import ProductRating from "./SubComponents/ProductRating";
const ProductGridSingle = ({
  product,
  currency,
  addToCart,
  addToWishlist,
  addToCompare,
  cartItem,
  wishlistItem,
  compareItem,
  sliderClassName,
  spaceBottomClass,
}) => {
  const [modalShow, setModalShow] = useState(false);
  //   const { addToast } = useToasts();
  const discountedPrice = 165542311;
  //   const discountedPrice = getDiscountPrice(product.price, product.discount);
  const finalProductPrice = +(
    product.price * /* currency.currencyRate */ 12
  ).toFixed(2);
  const finalDiscountedPrice = +(
    discountedPrice * /* currency.currencyRate */ 201
  ).toFixed(2);

  //col-xl-3 col-md-6 col-lg-4 col-sm-6

  return (
    <Fragment>
      <div
        className={`col-xl-3 col-md-3 col-lg-3 col-sm-6 ${
          sliderClassName ? sliderClassName : ""
        }`}
      >
        <div
          className={`product-wrap ${spaceBottomClass ? spaceBottomClass : ""}`}
        >
          <div className="product-img">
            <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
              <img
                className="default-img"
                src={process.env.PUBLIC_URL + product.image[0]}
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
                    <AiOutlineShoppingCart className="pe-7s-cart"></AiOutlineShoppingCart>{" "}
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
                <button onClick={() => setModalShow(true)} title="Quick View">
                  <i className="pe-7s-look" />
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
                <Fragment>
                  {/* <span>{currency.currencySymbol + finalDiscountedPrice}</span> */}
                  <span>৳ {finalDiscountedPrice}</span>
                  <span className="old">৳ {finalProductPrice}</span>
                </Fragment>
              ) : (
                <span>৳ {finalProductPrice} </span>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* product modal */}
      {/* <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
        currency={currency}
        discountedprice={discountedPrice}
        finalproductprice={finalProductPrice}
        finaldiscountedprice={finalDiscountedPrice}
        cartitem={cartItem}
        wishlistitem={wishlistItem}
        compareitem={compareItem}
        addtocart={addToCart}
        addtowishlist={addToWishlist}
        addtocompare={addToCompare}
        addtoast={addToast}
      /> */}
    </Fragment>
  );
};

export default ProductGridSingle;