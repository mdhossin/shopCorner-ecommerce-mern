import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidbar/AdminSidebar";
import AdminTopnav from "./AdminTopnav/AdminTopnav";

const AdminDashboard = () => {
  return (
    <div className="customer">
      <AdminSidebar />

      <div className="main">
        <div className="main__content">
          <AdminTopnav />
          {/* used nested route data show here */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
