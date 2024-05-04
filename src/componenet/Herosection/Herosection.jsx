import React from "react";
import LeftSide from "./LeftSide";
import Right from "./Right";
import './Herosection.css'
function Herosection() {
  return (
    <div className="heroSection">
      <div className="left">
        <LeftSide />
      </div>
      <div className="right">
        <Right />
      </div>
    </div>
  );
}

export default Herosection;
