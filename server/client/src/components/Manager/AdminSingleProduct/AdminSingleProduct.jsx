import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../../redux/actions/productAction";

const AdminSingleProduct = ({ product }) => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.userLogin.userInfo.access_token);

  const deleteHandler = async (id, public_id) => {
    try {
      if (window.confirm("are you sure?")) {
        const destroyImg = axios.post(
          "/api/destroy",
          { public_id },
          {
            headers: { Authorization: token },
          }
        );
        await destroyImg;
        dispatch(deleteProduct(token, id));
        alert("Product Deleted Successfully");
      }
    } catch (error) {
      alert(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  };

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
          <p style={{ marginBottom: "1rem" }}>
            {product.description.slice(0, 120)}...
          </p>
        </div>

        <div className="details__buttons">
          <div>
            <Link to={`/dashboard/edit/${product._id}`}>
              <button className="details__buttons-edit">Edit</button>
            </Link>
          </div>

          <button
            onClick={() => deleteHandler(product._id, product.images.public_id)}
            className="details__buttons-btn"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminSingleProduct;
