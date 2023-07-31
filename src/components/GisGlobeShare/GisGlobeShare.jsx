
import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const GisGlobeShare = ({ className, gisGlobeShare = "/img/gis-globe-share.svg" }) => {
  return <img className={`gis-globe-share ${className}`} alt="Gis globe share" src={gisGlobeShare} />;
};

GisGlobeShare.propTypes = {
  gisGlobeShare: PropTypes.string,
};
