import React from "react";
import { CgProfile } from "react-icons/cg";
import { BiReceipt } from "react-icons/bi";
import { Link } from "react-router-dom";

import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import Loading from "../../../Common/Loading/Loading";
const Sidebar = () => {
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
        <h1>Dashboard</h1>
      </div>

      {user?.user?._id ? (
        <div className="sidebar__menu">
          <Link
            to="/dashboard"
            className={`sidebar__menu__item`}
            onClick={closeSidebar}
          >
            <div className="sidebar__menu__item__icon">
              <CgProfile />
            </div>
            <div className="sidebar__menu__item__txt">Profile</div>
          </Link>
          <Link
            to="/dashboard/orders"
            className={`sidebar__menu__item`}
            onClick={closeSidebar}
          >
            <div className="sidebar__menu__item__icon">
              <BiReceipt />
            </div>
            <div className="sidebar__menu__item__txt">My Orders</div>
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

export default Sidebar;
