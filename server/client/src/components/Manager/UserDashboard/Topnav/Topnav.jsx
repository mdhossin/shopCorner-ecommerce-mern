import React from "react";
import { BiAlignLeft } from "react-icons/bi";
const Topnav = () => {
  const openSidebar = () => {
    document.body.classList.add("sidebar-open");
  };

  return (
    <div className="topNav">
      <div className="sidebar-toggle" onClick={openSidebar}>
        <BiAlignLeft />
      </div>
      <h1 className="topNav__title">Dashboard</h1>
    </div>
  );
};

export default Topnav;
