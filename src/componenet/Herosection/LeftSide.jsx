import React from "react";
import "./Leftside.css";
function LeftSide() {
  return (
    <div className="left-box">
      <button>Get Weather</button>
      <ul>
        <li style={{ background: "#4472c4", color: "white" }}>City</li>
        <li>Las Vegas</li>
        <li>London</li>
        <li>Los Angeles</li>
        <li>New York</li>
      </ul>
    </div>
  );
}

export default LeftSide;
