import React from "react";
import Loader from "../../components/Common/Loader/Loader";
import ProductGridSingle from "./ProductGridSingle";

import {
  samsung,
  jogger1,
  jogger2,
  jogger3,
  watch1,
  watch2,
  watch3,
  watch4,
  watch5,
  phone1,
  phone2,
  phone3,
  phone5,
} from "../../assets/product";

const cartItems = [
  {
    id: 1,
    price: 123466,
    image: [jogger1, jogger2, phone1],
    discount: 12,
    newProduct: true,
    affiliateLink: true,
    quantity: 5,
    name: "Watch",
    rating: 4,
  },
  {
    id: 1,
    price: 123466,
    image: [jogger1, jogger2, phone1],
    discount: 12,
    newProduct: true,
    affiliateLink: true,
    quantity: 5,
    name: "Watch",
    rating: 4,
  },
  {
    id: 1,
    price: 123466,
    image: [jogger1, jogger2, phone1],
    discount: 12,
    newProduct: true,
    affiliateLink: true,
    quantity: 5,
    name: "Watch",
    rating: 4,
  },
  {
    id: 1,
    price: 123466,
    image: [jogger1, jogger2, phone1],
    discount: 12,
    newProduct: true,
    affiliateLink: true,
    quantity: 5,
    name: "Watch",
    rating: 4,
  },
  {
    id: 1,
    price: 123466,
    image: [jogger1, jogger2, phone1],
    discount: 12,
    newProduct: true,
    affiliateLink: true,
    quantity: 5,
    name: "Watch",
    rating: 4,
  },
  {
    id: 2,
    price: 85023,
    image: [watch1, watch2, phone1],
    discount: 12,
    newProduct: true,
    affiliateLink: true,
    quantity: 3,
    name: "Watch",
    rating: 3,
  },
  {
    id: 3,
    price: 456123,
    image: [phone1, phone2, phone3],
    discount: 12,
    newProduct: true,
    affiliateLink: true,
    quantity: 3,
    name: "Samsung",
    rating: 5,
  },
  {
    id: 4,
    price: 9999,
    image: [phone3, phone5, watch4],
    discount: 12,
    newProduct: true,
    affiliateLink: true,
    quantity: 3,
    name: "Sony",
    rating: 2,
  },
];
const products = [
  {
    id: 1,
    price: 123466,
    image: [samsung, jogger2, phone1],
    discount: 12,
    newProduct: false,
    affiliateLink: true,
    quantity: 5,
    name: "Watch",
    rating: 4,
  },
  {
    id: 1,
    price: 123466,
    image: [jogger1, jogger2, phone1],
    discount: 12,
    newProduct: false,
    affiliateLink: true,
    quantity: 5,
    name: "Watch",
    rating: 4,
  },
  {
    id: 1,
    price: 123466,
    image: [jogger1, jogger2, phone1],
    discount: 12,
    newProduct: false,
    affiliateLink: true,
    quantity: 5,
    name: "Watch",
    rating: 4,
  },
  {
    id: 1,
    price: 123466,
    image: [jogger1, jogger2, phone1],
    discount: 12,
    newProduct: true,
    affiliateLink: true,
    quantity: 5,
    name: "Watch",
    rating: 4,
    category: "bestSeller",
  },
  {
    id: 1,
    price: 123466,
    image: [jogger1, jogger2, phone1],
    discount: 12,
    newProduct: true,
    affiliateLink: true,
    quantity: 5,
    name: "Watch",
    rating: 4,
    category: "bestSeller",
  },
  {
    id: 2,
    price: 85023,
    image: [watch1, watch2, phone1],
    discount: 12,
    newProduct: true,
    affiliateLink: true,
    quantity: 3,
    name: "Watch",
    rating: 3,
  },
  {
    id: 3,
    price: 456123,
    image: [phone1, phone2, phone3],
    discount: 12,
    newProduct: true,
    affiliateLink: true,
    quantity: 3,
    name: "Samsung",
    rating: 5,
  },
  {
    id: 4,
    price: 9999,
    image: [phone3, phone5, watch4],
    discount: 12,
    newProduct: true,
    affiliateLink: true,
    quantity: 3,
    name: "Sony",
    rating: 2,
  },
];

const ProductGrid = ({
  loading,
  error,
  //   products,
  currency,
  addToCart,
  addToWishlist,
  addToCompare,
  //   cartItems,
  wishlistItems,
  compareItems,
  sliderClassName,
  spaceBottomClass,
}) => {
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <h1>{error} </h1>
      ) : (
        <>
          {products &&
            products?.map((product, i) => {
              return (
                <ProductGridSingle
                  sliderClassName={sliderClassName}
                  spaceBottomClass={spaceBottomClass}
                  product={product}
                  currency={currency}
                  addToCart={addToCart}
                  addToWishlist={addToWishlist}
                  addToCompare={addToCompare}
                  cartItem={
                    cartItems.filter(
                      (cartItem) => cartItem.id === product.id
                    )[0]
                  }
                  wishlistItem={
                    wishlistItems?.filter(
                      (wishlistItem) => wishlistItem.id === product.id
                    )[0]
                  }
                  compareItem={
                    compareItems?.filter(
                      (compareItem) => compareItem.id === product.id
                    )[0]
                  }
                  // key={product._id}
                  key={i}
                />
              );
            })}
        </>
      )}
    </>
  );
};

export default ProductGrid;
