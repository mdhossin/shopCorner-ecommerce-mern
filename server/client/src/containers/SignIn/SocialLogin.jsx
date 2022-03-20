import React from "react";
import { useDispatch } from "react-redux";

import { GoogleLogin } from "react-google-login-lite";
import { googleLogin } from "../../redux/actions/userActions";

const SocialLogin = () => {
  const dispatch = useDispatch();

  const onSuccess = (googleUser) => {
    const id_token = googleUser.getAuthResponse().id_token;
    dispatch(googleLogin(id_token));
  };

  return (
    <>
      <div className="my-2">
        <GoogleLogin
          client_id="1060142626291-b7t0hjccfsflhdordfb1fed2j32igvn8.apps.googleusercontent.com"
          cookiepolicy="single_host_origin"
          onSuccess={onSuccess}
        />
      </div>
    </>
  );
};

export default SocialLogin;