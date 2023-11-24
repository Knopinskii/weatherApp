import "./App.css";
import { useState } from "react";

// import UilReact from "@iconscout/react-unicons/icons/uil-react";

import Inputs from "./components/Inputs";
import LocoTIme from "./components/LocoTIme";
import TempDetails from "./components/TempDetails";
import axios from "axios";

const key = "2fbbaab95668f0e45a516dee36760d49";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({
    description: "",
    temp: 0,
    feels: 0,
    humidity: 0,
    wind: 0,
    name: "",
    country: "",
    dt: 0,
    timezone: 0,
  });

  function searchWeather(e) {
    e.preventDefault();
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
      )
      .then((response) =>
        setWeatherData({
          description: response.data.weather[0].description,
          temp: response.data.main.temp,
          feels: response.data.main.feels_like,
          humidity: response.data.main.humidity,
          wind: response.data.wind.speed,
          name: response.data.name,
          country: response.data.sys.country,
          dt: response.data.dt,
          timezone: response.data.timezone,
        })
      );
  }
  return (
    <div className="mx-auto max-w-screen-md mt-5 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 rounded-lg">
      {/* <TopButtons setCity={setCity} /> */}
      <Inputs
        setCity={setCity}
        searchWeather={searchWeather}
        weatherData={weatherData}
      />
      <LocoTIme weatherData={weatherData} />
      <TempDetails weatherData={weatherData} />
    </div>
  );
}

export default App;
