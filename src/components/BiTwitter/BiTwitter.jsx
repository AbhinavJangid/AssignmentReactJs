
import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const BiTwitter = ({ className, biTwitter = "/img/bi-twitter-1.svg" }) => {
  return <img className={`bi-twitter ${className}`} alt="Bi twitter" src={biTwitter} />;
};

BiTwitter.propTypes = {
  biTwitter: PropTypes.string,
};
