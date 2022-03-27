import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../components/Common/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state?.userLogin);
  const { loading, userInfo } = user;
  // console.log(loading, userInfo);
  let location = useLocation();
  if (loading) {
    return <Loading />;
  }

  console.log(location, "private route");

  // if (userInfo?.access_token) {
  //   return children;
  // }
  // return <Navigate to="/signin" state={{ from: location }} />;

  // const location = useLocation()

  return userInfo?.access_token ? (
    <>{children}</>
  ) : (
    <Navigate
      replace={true}
      to="/signin"
      // state={{ from: `${location.pathname}${location.search}` }}
      state={{ from: location }}
    />
  );
};
export default PrivateRoute;
