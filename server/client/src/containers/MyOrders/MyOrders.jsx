import React, { Fragment, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { BiEdit } from "react-icons/bi";
import { Typography } from "@mui/material";
import { clearErrors, myOrders } from "../../redux/actions/orderActions";
import Loading from "../../components/Common/Loading/Loading";
import { Table } from "react-bootstrap";

const MyOrders = () => {
  const dispatch = useDispatch();

  const { loading, error, orders } = useSelector((state) => state.myOrders);
  const auth = useSelector((state) => state.userLogin?.userInfo);
  const { user } = auth;
  console.log(orders);

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    dispatch(myOrders());
  }, [dispatch, error]);

  return (
    <section className="myorders container-div">
      <h2>My Orders</h2>
      <div>
        <Table responsive="sm">
          <thead>
            <tr className="myorders__header">
              <th>Order Id</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td className="order-loading">
                  <Loading />
                </td>
              </tr>
            ) : error ? (
              <h3>{error}</h3>
            ) : (
              <>
                {orders?.map(({ _id, orderStatus, totalPrice }) => (
                  <tr key={_id}>
                    <td>#{_id}</td>
                    <td>{totalPrice}</td>
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
