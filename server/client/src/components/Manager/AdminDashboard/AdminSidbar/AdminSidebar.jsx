import React from "react";
import { CgProfile, CgAdd } from "react-icons/cg";
import { BiReceipt, BiCube } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MdAddBox } from "react-icons/md";

import { AiOutlineClose, AiOutlineHome } from "react-icons/ai";
import { useSelector } from "react-redux";
import Loading from "../../../Common/Loading/Loading";
const AdminSidebar = () => {
  const user = useSelector((state) => state?.userLogin?.userInfo);

  const closeSidebar = () => {
    document.querySelector(".main__content").style.transform =
      "scale(1) translateX(0)";
    setTimeout(() => {
      document.body.classList.remove("sidebar-open");
      document.querySelector(".main__content").style = "";
    }, 500);
  };

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <div className="sidebar-close" onClick={closeSidebar}>
          <AiOutlineClose />
        </div>
        <h1>Admin</h1>
      </div>

      {user?.access_token ? (
        <div className="sidebar__menu">
          <Link
            to="/dashboard"
            className={`sidebar__menu__item`}
            onClick={closeSidebar}
          >
            <div className="sidebar__menu__item__icon">
              <AiOutlineHome />
            </div>
            <div className="sidebar__menu__item__txt">Home</div>
          </Link>

          <Link
            to="/dashboard/products"
            className={`sidebar__menu__item`}
            onClick={closeSidebar}
          >
            <div className="sidebar__menu__item__icon">
              <BiCube />
            </div>
            <div className="sidebar__menu__item__txt">Products</div>
          </Link>
          <Link
            to="/dashboard/addproduct"
            className={`sidebar__menu__item`}
            onClick={closeSidebar}
          >
            <div className="sidebar__menu__item__icon">
              <CgAdd />
            </div>
            <div className="sidebar__menu__item__txt">Add Products</div>
          </Link>
          <Link
            to="/dashboard/orders"
            className={`sidebar__menu__item`}
            onClick={closeSidebar}
          >
            <div className="sidebar__menu__item__icon">
              <BiReceipt />
            </div>
            <div className="sidebar__menu__item__txt">Orders</div>
          </Link>
          <Link
            to="/dashboard/users"
            className={`sidebar__menu__item`}
            onClick={closeSidebar}
          >
            <div className="sidebar__menu__item__icon">
              <CgProfile />
            </div>
            <div className="sidebar__menu__item__txt">Users</div>
          </Link>
          <Link
            to="/dashboard/logout"
            className={`sidebar__menu__item`}
            onClick={closeSidebar}
          >
            <div className="sidebar__menu__item__icon">
              <CgProfile />
            </div>
            <div className="sidebar__menu__item__txt">Logout</div>
          </Link>
        </div>
      ) : (
        <>
          <Loading />
        </>
      )}
    </div>
  );
};

export default AdminSidebar;
