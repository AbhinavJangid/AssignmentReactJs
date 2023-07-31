
import iconPlay from "../../img/Vector.svg";
import React from "react";
import "./style.css";

export const MaterialSymbols = ({ className }) => {
  return (
    <img
      className={`material-symbols ${className}`}
      alt="Material symbols"
      src={iconPlay}
    />
  );
};
