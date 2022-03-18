import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ActivationEmail = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  console.log(activation_token, "token");
  useEffect(() => {
    if (activation_token) {
      const activationEmail = async () => {
        try {
          const res = await axios.post("/api/active", {
            activation_token,
          });
          console.log(res, "res");
          setSuccess(res.data.message);
        } catch (err) {
          err.response.data.message && setError(err.response.data.message);
        }
      };
      activationEmail();
    }
  }, [activation_token]);
  return (
    <div className="active_page section">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere incidunt
      impedit, cumque, voluptatem sapiente sunt nulla nisi reprehenderit nobis
      voluptates neque perferendis quos obcaecati culpa non ipsa, molestias
      debitis ipsam? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Ex reprehenderit, corporis, officiis quia perferendis ullam nemo vel dolor
      earum unde placeat cupiditate, ipsa doloremque pariatur veritatis
      asperiores deleniti debitis molestias? Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Facere incidunt impedit, cumque, voluptatem
      sapiente sunt nulla nisi reprehenderit nobis voluptates neque perferendis
      quos obcaecati culpa non ipsa, molestias debitis ipsam? Lorem, ipsum dolor
      sit amet consectetur adipisicing elit. Ex reprehenderit, corporis,
      officiis quia perferendis ullam nemo vel dolor earum unde placeat
      cupiditate, ipsa doloremque pariatur veritatis asperiores deleniti debitis
      molestias? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
      incidunt impedit, cumque, voluptatem sapiente sunt nulla nisi
      reprehenderit nobis voluptates neque perferendis quos obcaecati culpa non
      ipsa, molestias debitis ipsam? Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ex reprehenderit, corporis, officiis quia perferendis
      ullam nemo vel dolor earum unde placeat cupiditate, ipsa doloremque
      pariatur veritatis asperiores deleniti debitis molestias?
      {/* {error && showErrorMessage(error)}
      {success && showSuccessMessage(success)} */}
    </div>
  );
};

export default ActivationEmail;
