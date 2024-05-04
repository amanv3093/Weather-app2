import React, { useEffect, useState } from "react";
import "./Right.css";
import { UseDataContext } from "../../Context/Context";

function Right() {
  let { data, deleteFun, searchValue, setSearchValue } = UseDataContext();
  let [borderShow, setBorderShow] = useState(true);
  let [check, setCheck] = useState(null);

  let searchByName = () => {
    setSearchValue(check);
    setTimeout(() => {
      setBorderShow(false);
      setCheck("");
    }, 5000);
    setBorderShow(true);
  };

  return (
    <div className="rightBox">
      <div className="Main-rightBox-Search">
        <div className="rightBox-Search">
          <input
            type="text"
            placeholder="city name"
            onChange={(e) => setCheck(e.target.value.toLowerCase())}
            value={check}
          />
          <span onClick={searchByName} className="material-symbols-outlined">
            search
          </span>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>city</th>
            <th>Description</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Data age(hrs)</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {data &&
            data.map((item, index) => (
              <tr
                key={index}
                style={{
                  background:
                    data[index].name.toLowerCase() === searchValue && borderShow
                      ? "yellow"
                      : "",
                }}
              >
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.temp_in_celsius}</td>
                <td>{item.pressure_in_hPa}</td>
                <td>{item.date_and_time}</td>
                <td
                  onClick={() => deleteFun(item)}
                  style={{ cursor: "pointer" }}
                >
                  <span className="material-symbols-outlined">Delete</span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Right;
