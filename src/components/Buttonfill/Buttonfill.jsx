
import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Buttonfill = ({ className, buttonClassName, text = "Button" }) => {

  const handleClick = () => {
    console.log(text, ' button clicked');
  };
  return (
     <div className={`buttonfill ${className}`} onClick={handleClick}>
       <div className={`text-wrapper ${buttonClassName}`}>{text}</div> 
      
     </div>
    // <>
    // <button className={`buttonfill  ${buttonClassName}`}>{text}</button>
    // </>
    
  );
};

Buttonfill.propTypes = {
  text: PropTypes.string,
};
