import React from "react";
import TemperatureMain from "./TemperatureMain";
import TemperatureTime from "./TemperatureTime";
import TemperatureWeek from "./TemperatureWeek";

const Main = ({ weatherInfo, topPrefecture, topCity }) => {
  return (
    <main>
      <TemperatureMain
        weatherInfo={weatherInfo}
        topPrefecture={topPrefecture}
        topCity={topCity}
      />
      <TemperatureTime weatherInfo={weatherInfo} />
      <TemperatureWeek weatherInfo={weatherInfo} />
    </main>
  );
};

export default Main;
