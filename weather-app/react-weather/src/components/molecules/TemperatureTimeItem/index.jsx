import React from "react";

const index = ({ weatherInfo, weather, i }) => {
  return (
    <li key={i} className="temperature-time__item">
      <span>{weatherInfo.hourly.time[i].slice(-5,-3)}</span>
      <span>{weather.icon}</span>
      <span>{weatherInfo.hourly.temperature_2m[i]}℃</span>
    </li>
  );
};

export default index;
