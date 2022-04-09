import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../../redux/actions/orderActions";
import { getAdminProduct } from "../../../redux/actions/productAction";
import { userList } from "../../../redux/actions/userActions";
import { Doughnut, Line } from "react-chartjs-2";
const HomeAdmin = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.adminProducts);
  console.log(products);
  const { orders } = useSelector((state) => state.allOrders);

  const { users } = useSelector((state) => state.userList);
  let outOfStock = 0;

  products &&
    products.forEach((item) => {
      if (item.Stock === 0) {
        outOfStock += 1;
      }
    });

  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllOrders());
    dispatch(userList());
  }, [dispatch]);

  let totalAmount = 0;
  orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });

  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: ["tomato"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, totalAmount],
      },
    ],
  };

  const doughnutState = {
    labels: ["Out of Stock", "InStock"],
    datasets: [
      {
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [outOfStock, products.length - outOfStock],
      },
    ],
  };

  return (
    <section className="admin">
      <div className="admin__container grid">
        <div className="admin__container__summary grid">
          <div>
            <h3>Total Sales</h3>
            <h4>${Math.round(totalAmount)}</h4>
          </div>

          <div>
            <h3>All Products</h3>
            <h4>{products && products?.length}</h4>
          </div>
          <div>
            <h3>Total Orders</h3>
            <h4>{orders && orders?.length}</h4>
          </div>
          <div>
            <h3>Active Users</h3>
            <h4>{users && users?.length}</h4>
          </div>
        </div>

        {/* <div className="lineChart">
          <Line data={lineState} />
        </div> */}

        {/* <div className="doughnutChart">
          <Doughnut data={doughnutState} />
        </div> */}
      </div>
    </section>
  );
};

export default HomeAdmin;
