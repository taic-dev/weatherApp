import React from "react";
import styles from "./index.module.css";

const index = ({ weatherInfo, weather, i }) => {
  return (
    <li key={i} className={styles["temperature-week__item"]}>
      <span>{weatherInfo.daily.time[i].slice(-5).replace("-", "/")}</span>
      <span>{weather.icon}</span>
      <div className="temperature-week__range">
        <span>{weatherInfo.daily.temperature_2m_max[i]}℃</span>
        <span>/</span>
        <span>{weatherInfo.daily.temperature_2m_min[i]}℃</span>
      </div>
    </li>
  );
};

export default index;
