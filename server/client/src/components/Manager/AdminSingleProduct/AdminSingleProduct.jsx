import React from "react";
import { Link } from "react-router-dom";

const AdminSingleProduct = ({ product }) => {
  return (
    // reuse css class
    <>
      <div className="product-wrap details h-100">
        <div className="product-img">
          <img className="default-img" src={product?.images?.url} alt="" />
        </div>
        <div className="product-content">
          <h3>{product.name}</h3>
        </div>
        <div className="details__price">
          <h3>${product.price}</h3>
        </div>
        <div className="product-desc">
          <p>{product.description}</p>
        </div>

        <div className="details__buttons">
          <div>
            <Link to={`/dashboard/edit/${product._id}`}>
              <button className="button">Edit</button>
            </Link>
          </div>

          <button className="button-secondary">Delete</button>
        </div>
      </div>
    </>
  );
};

export default AdminSingleProduct;
