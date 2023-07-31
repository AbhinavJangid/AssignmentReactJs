import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PhInstagramLogo = ({ className, phInstagramLogo = "/img/ph-instagram-logo-fill-1.svg" }) => {
  return <img className={`ph-instagram-logo ${className}`} alt="Ph instagram logo" src={phInstagramLogo} />;
};

PhInstagramLogo.propTypes = {
  phInstagramLogo: PropTypes.string,
};
