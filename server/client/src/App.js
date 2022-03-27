import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import ForgotPassword from "./containers/ForgotPassword/ForgotPassword";
import Home from "./containers/Home/Home";
import Navigation from "./containers/Navigation/Navigation";
import SignIn from "./containers/SignIn/SignIn";
import SignUp from "./containers/Signup/SignUp";

import "swiper/swiper.min.css";
import "./styles/styles.scss";
import Contact from "./containers/Contact/Contact";
import ScrollToTop from "./helpers/ScrollToTop";
import Shop from "./containers/Shop/Shop";
import { ToastProvider } from "react-toast-notifications";
import ActivationEmail from "./containers/ActivationEmail/ActivationEmail";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshToken } from "./redux/actions/userActions";

import Blank from "./components/Manager/UserDashboard/Blank";
import Profile from "./components/Manager/Profile/Profile";
import ResetPassword from "./containers/ResetPassword/ResetPassword";
import UserDashboard from "./components/Manager/UserDashboard/Customer";
import PrivateRoute from "./containers/ProtectedRoute/PrivateRoute";
import Page404 from "./components/Common/Page404/Page404";
import AdminDashboard from "./components/Manager/AdminDashboard/AdminDashboard";
import HomeAdmin from "./components/Manager/HomeAdmin/HomeAdmin";
import AddProduct from "./components/Manager/AddProduct/AddProduct";
import ProductDetail from "./containers/ProductDetail/ProductDetail";

import AdminProductList from "./components/Manager/AdminProductList/AdminProductList";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  const user = useSelector((state) => state?.userLogin?.userInfo);
  return (
    <ToastProvider placement="top-right">
      <ScrollToTop>
        <BrowserRouter>
          <Navigation />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/forgotpassword"
              element={
                user?.access_token ? <Navigate to="/" /> : <ForgotPassword />
              }
            ></Route>
            <Route
              path="/signup"
              element={user?.access_token ? <Navigate to="/" /> : <SignUp />}
            ></Route>
            <Route path="signin" element={<SignIn />}></Route>

            <Route
              path="/active/:activation_token"
              element={
                user?.access_token ? <Navigate to="/" /> : <ActivationEmail />
              }
            />
            <Route
              path="/user/reset/:token"
              element={
                user?.access_token ? <Navigate to="/" /> : <ResetPassword />
              }
            />

            <Route
              path="/contact"
              element={
                <PrivateRoute>
                  <Contact />
                </PrivateRoute>
              }
            ></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route
              path="/product/:productId"
              element={<ProductDetail />}
            ></Route>

            {user?.access_token && user?.user?.role === "user" && (
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <UserDashboard />
                  </PrivateRoute>
                }
              >
                <Route index element={<Profile />} />

                <Route path="orders" element={<Blank />} />
              </Route>
            )}
            {user?.access_token && user?.user?.role === "admin" && (
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <AdminDashboard />
                  </PrivateRoute>
                }
              >
                <Route index element={<HomeAdmin />} />
                <Route path="users" element={<Profile />} />
                <Route path="addproduct" element={<AddProduct />} />
                <Route path="edit/:productId" element={<AddProduct />} />

                <Route path="products" element={<AdminProductList />} />

                <Route path="orders" element={<Blank />} />
              </Route>
            )}
            <Route path="*" element={<Page404 />}></Route>
          </Routes>

          {/* <Footer /> */}
        </BrowserRouter>
      </ScrollToTop>
    </ToastProvider>
  );
}

export default App;
