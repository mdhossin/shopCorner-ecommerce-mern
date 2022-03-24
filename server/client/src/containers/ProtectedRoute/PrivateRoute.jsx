import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../components/Common/Loading/Loading";

const PrivateRoute = ({ children, ...rest }) => {
  const user = useSelector((state) => state?.userLogin);
  const { loading, userInfo } = user;
  // console.log(loading, userInfo);
  let location = useLocation();
  if (loading) {
    return <Loading />;
  }

  if (userInfo?.access_token) {
    return children;
  }
  return <Navigate to="/signin" state={{ from: location }} />;
};
export default PrivateRoute;
