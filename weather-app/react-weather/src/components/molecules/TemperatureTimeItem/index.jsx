import React from "react";
import styles from "./index.module.css"

const index = ({ weatherInfo, weather, i }) => {
  return (
    <li key={i} className={styles["temperature-time__item"]}>
      <span>{weatherInfo.hourly.time[i].slice(-5,-3)}</span>
      <span>{weather.icon}</span>
      <span>{weatherInfo.hourly.temperature_2m[i]}℃</span>
    </li>
  );
};

export default index;
