import { createContext, useContext, useState } from "react";

export let DataContext = createContext(null);
export let UseDataContext = () => {
  return useContext(DataContext);
};
export let ContextProvider = (props) => {
  let [cityName, setCityName] = useState([
    { name: "Las Vegas", active: false },
    { name: "London", active: false },
    { name: "Los Angeles", active: false },
    { name: "New York", active: false },
  ]);
  let [count, SetCount] = useState(0);
  let [data, setData] = useState([]);
  let [searchValue, setSearchValue] = useState(null);

  async function add() {
    if (cityName.length > count) {
      console.log("enter");
      for (let i = 0; i < 4; i++) {
        if (cityName[i].active === false) {
          let response = await fetch(
            `https://python3-dot-parul-arena-2.appspot.com/test?cityname=${cityName[i].name}`
          );
          let parsedResponse = await response.json();
          setData([...data, { ...parsedResponse, name: cityName[i].name }]);

          let cityNameCopy = cityName;
          cityNameCopy[i].active = true;
          setCityName(cityNameCopy);
          SetCount(count + 1);
          break;
        }
      }
    }
  }

  function deleteFun(e) {
    let updateData = data.filter((elem) => {
      return e.name !== elem.name;
    });
    setData(updateData);
    SetCount(count - 1);

    let updatedCityName = cityName.map((city) => {
      console.log(city.name);
      return e.name === city.name ? { ...city, active: false } : city;
    });
    setCityName(updatedCityName);
    console.log("updateCityData", updatedCityName);
  }

  return (
    <DataContext.Provider
      value={{
        cityName,
        setCityName,
        count,
        SetCount,
        setData,
        data,
        add,
        deleteFun,
        searchValue,
        setSearchValue,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
