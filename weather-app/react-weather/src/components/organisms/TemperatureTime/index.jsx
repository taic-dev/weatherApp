import React from "react";
import TemperatureTimeItem from "../../molecules/TemperatureTimeItem";
import { WeatherList } from "../../../utils/WeatherList";
import styles from "./index.module.css";

const TemperatureTime = ({ weatherInfo }) => {
  return (
    <div className={styles["temperature-time"]}>
      <ul className="temperature-time__slider">
        {(() => {
          const list = [];
          for (let i = 0; i < 24; i++) {
            let weather = WeatherList(weatherInfo.hourly.weathercode[i]);
            list.push(
              <React.Fragment key={i}>
                <TemperatureTimeItem
                  weatherInfo={weatherInfo}
                  weather={weather}
                  i={i}
                />
              </React.Fragment>
            );
          }
          return <>{list}</>;
        })()}
      </ul>
    </div>
  );
};

export default TemperatureTime;
