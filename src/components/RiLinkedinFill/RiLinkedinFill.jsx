
import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const RiLinkedinFill = ({ className, riLinkedinFill = "/img/ri-linkedin-fill-1.svg" }) => {
  return <img className={`ri-linkedin-fill ${className}`} alt="Ri linkedin fill" src={riLinkedinFill} />;
};

RiLinkedinFill.propTypes = {
  riLinkedinFill: PropTypes.string,
};
