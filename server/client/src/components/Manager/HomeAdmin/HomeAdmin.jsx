import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../../redux/actions/orderActions";
import { getAdminProduct } from "../../../redux/actions/productAction";
import { userList } from "../../../redux/actions/userActions";
const HomeAdmin = () => {
  const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => state.adminProducts);
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

  return (
    <section className="admin">
      <div className="admin__container grid">
        <div className="admin__container__summary grid">
          <div>
            <h3>Total Sales</h3>
            <h4>${totalAmount}</h4>
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
      </div>
    </section>
  );
};

export default HomeAdmin;
