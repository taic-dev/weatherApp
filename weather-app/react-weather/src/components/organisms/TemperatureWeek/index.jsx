import React from "react";
import TemperatureWeekItem from "../../molecules/TemperatureWeekItem";
import { WeatherList } from "../../WeatherList";
import styles from "./index.module.css"

const index = ({ weatherInfo }) => {
  return (
    <div className={styles["temperature-week"]}>
      <ul className="temperature-week__list">
        {(() => {
          const list = [];
          for (let i = 0; i < 7; i++) {
            let weather = WeatherList(weatherInfo.daily.weathercode[i]);
            list.push(
              <TemperatureWeekItem
                weatherInfo={weatherInfo}
                weather={weather}
                i={i}
              />
            );
          }
          return <>{list}</>;
        })()}
      </ul>
    </div>
  );
};

export default index;
