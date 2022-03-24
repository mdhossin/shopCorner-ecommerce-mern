import React from "react";
import { useSelector } from "react-redux";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import UserDashboard from "../UserDashboard/Customer";

const Dashboard = () => {
  const { role } = useSelector((state) => state.userLogin.userInfo.user);
  console.log(role);
  return <div>{role === "admin" ? <AdminDashboard /> : <UserDashboard />}</div>;
};

export default Dashboard;
