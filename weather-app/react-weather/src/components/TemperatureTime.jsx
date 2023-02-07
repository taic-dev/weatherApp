import React from "react";
import TemperatureTimeItem from "../components/molecules/TemperatureTimeItem"
import { WeatherList } from "./WeatherList";

const TemperatureTime = ({ weatherInfo }) => {
  return (
    <div className="temperature-time">
      <ul className="temperature-time__slider">
        {(() => {
          const list = [];
          for (let i = 0; i < 24; i++) {
            let weather = WeatherList(weatherInfo.hourly.weathercode[i]);
            list.push(
                <TemperatureTimeItem weatherInfo={weatherInfo} weather={weather} i={i} />
            );
          }
          return <>{list}</>;
        })()}
      </ul>
    </div>
  );
};

export default TemperatureTime;
