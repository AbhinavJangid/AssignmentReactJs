
import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PhMagnifyingGlass = ({ className, phMagnifyingGlass = "/img/ph-magnifying-glass-light-1.svg" }) => {
  return <img className={`ph-magnifying-glass ${className}`} alt="Ph magnifying glass" src={phMagnifyingGlass} />;
};

PhMagnifyingGlass.propTypes = {
  phMagnifyingGlass: PropTypes.string,
};
