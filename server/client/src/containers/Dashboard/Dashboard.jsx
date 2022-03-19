import React from "react";
import Customer from "../../components/Admin/Dashboard/Customer";
import { useSelector } from "react-redux";
import dashboardLinks from "./links.json";
import { toggleDashboardMenu } from "./actions";

const Dashboard = () => {
  const { isMenuOpen } = useSelector((state) => state.dashboard);
  return (
    <div>
      <Customer
        isMenuOpen={isMenuOpen}
        links={dashboardLinks["ROLE_MEMBER"]}
        toggleMenu={toggleDashboardMenu}
      />
    </div>
  );
};

export default Dashboard;
