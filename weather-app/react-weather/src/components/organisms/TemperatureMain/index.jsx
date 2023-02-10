import React from "react";
import TemperatureMainDesc from "../../molecules/TemperatureMainDesc";
import { WeatherList } from "../../../utils/WeatherList";

const index = ({ weatherInfo, topPrefecture, topCity }) => {
  let weather = WeatherList(weatherInfo.current_weather.weathercode);

  const BackgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}` + `${weather.img})`,
    backgroundSize: "cover",
  };

  return (
    <div className="temperature-main" style={BackgroundStyle}>
      <TemperatureMainDesc
        weatherInfo={weatherInfo}
        topPrefecture={topPrefecture}
        topCity={topCity}
      />
    </div>
  );
};

export default index;
