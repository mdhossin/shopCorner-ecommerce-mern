import React from "react";
import {
  smartwatch1,
  smartwatch2,
  smartwatch3,
  smartwatch4,
  smartwatch5,
  smartwatch6,
  smartwatch7,
  smartwatch8,
} from "../../assets/product";
import Loader from "../../components/Common/Loader/Loader";

import FeaturedSingle from "./FeaturedSingle/FeaturedSingle";

const FeaturedProduct = () => {
  const products = [
    {
      id: 1,
      price: 199,
      image: smartwatch1,
      discount: 12,
      newProduct: false,
      affiliateLink: true,
      quantity: 5,
      name: "Legend Silver Dial",
      rating: 4,
    },
    {
      id: 2,
      price: 399,
      image: smartwatch2,
      discount: 15,
      newProduct: true,
      affiliateLink: true,
      quantity: 5,
      name: "Silver Stainless Steel",
      rating: 4,
    },
    {
      id: 3,
      price: 599,
      image: smartwatch3,
      discount: 12,
      newProduct: false,
      affiliateLink: true,
      quantity: 5,
      name: "Nautilo Blue Men’s",
      rating: 4,
    },
    {
      id: 4,
      price: 169,
      image: smartwatch4,
      discount: 22,
      newProduct: true,
      affiliateLink: true,
      quantity: 5,
      name: "Silver Stainless Steel",
      rating: 4,
      category: "bestSeller",
    },
    {
      id: 5,
      price: 179,
      image: smartwatch5,
      discount: 12,
      newProduct: true,
      affiliateLink: true,
      quantity: 5,
      name: "Militare Grey Dial",
      rating: 4,
      category: "bestSeller",
    },
    {
      id: 6,
      price: 189,
      image: smartwatch6,
      discount: 12,
      newProduct: true,
      affiliateLink: true,
      quantity: 3,
      name: "Tourbillon Silver Dial",
      rating: 3,
    },
    {
      id: 7,
      price: 149,
      image: smartwatch7,
      discount: 12,
      newProduct: true,
      affiliateLink: true,
      quantity: 3,
      name: "Legend Black Dial",
      rating: 5,
    },
    {
      id: 8,
      price: 999,
      image: smartwatch8,
      discount: 12,
      newProduct: true,
      affiliateLink: true,
      quantity: 3,
      name: "Silver Stainless Steel",
      rating: 2,
    },
  ];

  return (
    <section className="featured container-div">
      <div className="featured__container">
        <h2 className="featured__title">Featured Products</h2>

        <div className="featured__products grid">
          <>
            {false ? (
              <Loader />
            ) : (
              <>
                {products &&
                  products?.map((product, i) => {
                    return <FeaturedSingle key={i} product={product} />;
                  })}
              </>
            )}
          </>
        </div>

        <div className="featured__button">
          <button className="button">View Products</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
