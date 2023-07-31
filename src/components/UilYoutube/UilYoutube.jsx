
import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const UilYoutube = ({ className, uilYoutube = "/img/uil-youtube-1.svg" }) => {
  return <img className={`uil-youtube ${className}`} alt="Uil youtube" src={uilYoutube} />;
};

UilYoutube.propTypes = {
  uilYoutube: PropTypes.string,
};
