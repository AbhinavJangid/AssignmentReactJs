
import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IcBaselineArrow = ({ className, icBaselineArrow = "/img/ic-baseline-arrow-drop-down-1.svg" }) => {
  return <img className={`ic-baseline-arrow ${className}`} alt="Ic baseline arrow" src={icBaselineArrow} />;
};

IcBaselineArrow.propTypes = {
  icBaselineArrow: PropTypes.string,
};
