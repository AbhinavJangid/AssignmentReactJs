import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const MajesticonsRocket = ({ majesticonsRocket = "/img/majesticons-rocket-3-start-line.svg" }) => {
  return <img className="majesticons-rocket" alt="Majesticons rocket" src={majesticonsRocket} />;
};

MajesticonsRocket.propTypes = {
  majesticonsRocket: PropTypes.string,
};
