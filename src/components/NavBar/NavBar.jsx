
import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button";
import { Buttonfill } from "../Buttonfill";
import { IcBaselineArrow } from "../IcBaselineArrow";
import { PhMagnifyingGlass } from "../PhMagnifyingGlass";
import "./style.css";

export const NavBar = ({
  className,
  browseFundraisersClassName,
  icBaselineArrowIcBaselineArrow = "/img/ic-baseline-arrow-drop-down.svg",
  phMagnifyingGlassPhMagnifyingGlass = "/img/ph-magnifying-glass-light.svg",
}) => {
  return (
    <div className={`nav-bar ${className}`}>
      <div className="frame">
        <div className="frame-2">
          <div className="frame-3">
            <div className={`text-wrapper-2 ${browseFundraisersClassName}`}>Browse Fundraisers</div>
            <div className="group">
              <div className="fundraiser-for">Fundraiser for</div>
              <IcBaselineArrow
                className="ic-baseline-arrow-drop-down"
                icBaselineArrow={icBaselineArrowIcBaselineArrow}
              />
            </div>
            <div className="text-wrapper-2">How It Works</div>
            <div className="text-wrapper-2">|</div>
            <div className="group-2">
              <PhMagnifyingGlass
                className="ph-magnifying-glass-light"
                phMagnifyingGlass={phMagnifyingGlassPhMagnifyingGlass}
              />
              <div className="search">Search</div>
            </div>
          </div>
          <div className="frame-4">
            <Buttonfill
              buttonClassName="design-component-instance-node-2"
              className="design-component-instance-node"
              text="Start a Fundraiser"
            />
            <Button
              buttonClassName="design-component-instance-node-2"
              className="design-component-instance-node"
              text="Sign In"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  icBaselineArrowIcBaselineArrow: PropTypes.string,
  phMagnifyingGlassPhMagnifyingGlass: PropTypes.string,
};
