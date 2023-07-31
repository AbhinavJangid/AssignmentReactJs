
import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Button = ({ className, buttonClassName, text = "Button" }) => {

  const handleClick = () => {
    console.log(text, ' button clicked');
  };

  return (
    <div className={`button ${className}`} onClick={handleClick}>
      <div className={`div ${buttonClassName}`}>{text}</div>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string,
};
