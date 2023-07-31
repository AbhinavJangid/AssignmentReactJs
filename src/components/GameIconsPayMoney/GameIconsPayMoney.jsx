
import iconHand from "../../img/game-icons_pay-money.svg"
import React from "react";
import "./style.css";

export const GameIconsPayMoney = ({ className }) => {
  return (
    <img
      className={`game-icons-pay-money ${className}`}
      alt="Game icons pay money"
      src={iconHand}
    />
  );
};
