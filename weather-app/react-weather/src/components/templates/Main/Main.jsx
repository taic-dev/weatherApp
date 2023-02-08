import React from "react";
import TemperatureMain from "../../organisms/TemperatureMain";
import TemperatureTime from "../../organisms/TemperatureTime";
import TemperatureWeek from "../../organisms/TemperatureWeek";

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
