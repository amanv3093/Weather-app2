import React from "react";
import "./Leftside.css";
import { UseDataContext } from "../../Context/Context";
function LeftSide() {
  let { cityName, add } = UseDataContext();
  return (
    <div className="left-box">
      <button onClick={add}>Get Weather</button>
      <ul>
        <li style={{ background: "#4472c4", color: "white" }}>City</li>
        {cityName.map((e) => (
          <li
            style={{
              border: e.active === true ? "2px solid #41cc41" : "",
              background: e.active === true ? "#efefef" : "",
            }}
          >
            {e.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LeftSide;
