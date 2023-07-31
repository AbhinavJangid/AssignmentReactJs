import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IcRoundSendTo = ({ icRoundSendTo = "/img/ic-round-send-to-mobile.svg" }) => {
  return <img className="ic-round-send-to" alt="Ic round send to" src={icRoundSendTo} />;
};

IcRoundSendTo.propTypes = {
  icRoundSendTo: PropTypes.string,
};
