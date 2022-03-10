import React from "react";

const Input = ({ type, placeholder }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className="contact__form__div-input"
      />
    </>
  );
};

export default Input;
