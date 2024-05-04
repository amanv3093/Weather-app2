import React, { useEffect, useState } from "react";
import "./Right.css";
function Right() {
  let [cityName, setCityName] = useState([
    "Las Vegas",
    "London",
    "Los Angeles",
    "New York",
  ]);
  let [data, setData] = useState([]);

  async function fun() {
    let response = await fetch(
      "https://python3-dot-parul-arena-2.appspot.com/test?cityname=Las%20Vegas"
    );
    let parsedResponse = await response.json();
    setData([...data, parsedResponse]);
  }

  return (
    <div className="rightBox">
      <button onClick={fun}>click</button>
      <div className="Main-rightBox-Search">
        <div className="rightBox-Search">
          <input type="text" placeholder="city name" />
          <span class="material-symbols-outlined">search</span>
        </div>
      </div>

      <table>
        <tr colspan="3">
          <th>city</th>
          <th>Description</th>
          <th>Temprature</th>
          <th>Pressure</th>
          <th> Data age(hrs)</th>
          <th>
            <span class="material-symbols-outlined">delete</span>
          </th>
        </tr>

        <tbody>
          {data &&
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.description}</td>
                <td>{item.description}</td>
                <td>{item.temp_in_celsius}</td>
                <td>{item.pressure_in_hPa}</td>
                <td>{item.date_and_time}</td>
                <td>
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
