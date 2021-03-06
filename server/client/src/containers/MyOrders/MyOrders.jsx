import React, { Fragment, useEffect } from "react";
import { useToasts } from "react-toast-notifications";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import { BiEdit } from "react-icons/bi";

import { clearErrors, myOrders } from "../../redux/actions/orderActions";

import { Table } from "react-bootstrap";
import Loader from "../../components/Common/Loader/Loader";

const MyOrders = () => {
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  const { loading, error, orders } = useSelector((state) => state.myOrders);

  useEffect(() => {
    if (error) {
      addToast(error, { appearance: "error", autoDismiss: true });
      dispatch(clearErrors());
    }
    dispatch(myOrders());
  }, [dispatch, error, addToast]);

  return (
    <section className="myorders container-div">
      <h2>My Orders</h2>
      <div>
        <Table responsive="sm">
          <thead>
            <tr className="myorders__header">
              <th>Order Id</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td className="order-loading">
                  <Loader inline />
                </td>
              </tr>
            ) : error ? (
              <h3>{error}</h3>
            ) : (
              <>
                {orders?.map(({ _id, orderStatus, totalPrice, orderItems }) => (
                  <tr key={_id}>
                    <td>#{_id}</td>
                    <td>{orderItems?.length}</td>
                    <td>{totalPrice.toFixed(2)}</td>
                    <td>
                      <button>{orderStatus}</button>
                    </td>
                    <td title="Order Details">
                      {" "}
                      <Link to={`/dashboard/order/${_id}`}>
                        {" "}
                        <BiEdit
                          style={{
                            color: "rgb(165, 5, 29)",
                            cursor: "pointer",
                          }}
                        />
                      </Link>
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </Table>
      </div>
      <h2
        style={{
          marginTop: "2rem",
          textAlign: "center",
          color: "#333",
        }}
      >
        {orders?.length === 0 && "Your order is empty."}
      </h2>
    </section>
  );
};

export default MyOrders;
