import React from "react";

import { Link } from "react-router-dom";
import sidebarNav from "../../../../utils/sidebarNav";
import { AiOutlineClose } from "react-icons/ai";
const Sidebar = () => {
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
      <div className="sidebar__menu">
        {sidebarNav.map((nav, index) => (
          <Link
            to={nav.link}
            key={`nav-${index}`}
            className={`sidebar__menu__item`}
            onClick={closeSidebar}
          >
            <div className="sidebar__menu__item__icon">{nav.icon}</div>
            <div className="sidebar__menu__item__txt">{nav.text}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
