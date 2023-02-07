import React from "react";
import { WeatherList } from "../../WeatherList";

const index = ({ weatherInfo, topPrefecture, topCity }) => {

  let weather = WeatherList(weatherInfo.current_weather.weathercode);

  return (
    <div className="temperature-main__desc">
      <p>
        {topPrefecture} / {topCity}
      </p>
      <span>{weather.name}</span>
      <h2>{weatherInfo.current_weather.temperature}℃</h2>
    </div>
  );
};

export default index;
