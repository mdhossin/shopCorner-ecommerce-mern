import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Topnav from "./Topnav/Topnav";

const Customer = () => {
  return (
    <div className="customer">
      <Sidebar />
      <div className="main">
        <div className="main__content">
          <Topnav />
          {/* used nested route data show here */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Customer;
