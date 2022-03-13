import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./containers/Footer/Footer";
import ForgotPassword from "./containers/ForgotPassword/ForgotPassword";
import Home from "./containers/Home/Home";
import Navigation from "./containers/Navigation/Navigation";
import SignIn from "./containers/SignIn/SignIn";
import SignUp from "./containers/Signup/SignUp";

import "swiper/swiper.min.css";
import "./styles/styles.scss";
import Contact from "./containers/Contact/Contact";
import ScrollToTop from "./helpers/ScrollToTop";

function App() {
  return (
    <ScrollToTop>
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="forgotpassword" element={<ForgotPassword />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="signin" element={<SignIn />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </ScrollToTop>
  );
}

export default App;
