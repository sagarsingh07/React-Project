import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    temp: 28,
    tempMin: 26,
    tempMax: 34,
    humidity: 70,
    feelsLike: 29,
    weather: "Haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>
        <b>Basic Weather Application</b>
      </h2>

      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
