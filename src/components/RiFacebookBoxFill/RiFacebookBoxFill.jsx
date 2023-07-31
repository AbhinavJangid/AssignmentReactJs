
import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const RiFacebookBoxFill = ({ className, riFacebookBoxFill = "/img/ri-facebook-box-fill-1.svg" }) => {
  return <img className={`ri-facebook-box-fill ${className}`} alt="Ri facebook box fill" src={riFacebookBoxFill} />;
};

RiFacebookBoxFill.propTypes = {
  riFacebookBoxFill: PropTypes.string,
};
