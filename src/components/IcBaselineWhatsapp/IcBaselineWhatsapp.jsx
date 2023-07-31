

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IcBaselineWhatsapp = ({ className, icBaselineWhatsapp = "/img/ic-baseline-whatsapp-1.svg" }) => {
  return <img className={`ic-baseline-whatsapp ${className}`} alt="Ic baseline whatsapp" src={icBaselineWhatsapp} />;
};

IcBaselineWhatsapp.propTypes = {
  icBaselineWhatsapp: PropTypes.string,
};
