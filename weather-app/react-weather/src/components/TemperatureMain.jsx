import React from 'react'
import { WeatherList } from './WeatherList'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { color } from '@mui/system';

const TemperatureMain = ({ weatherInfo, topPrefecture, topCity }) => {

  let weather = WeatherList(weatherInfo.current_weather.weathercode);

  const BackgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}` + `${weather.img})`,
    backgroundSize: "cover",
  }

  return (
    <>
    <div className="temperature-main" style={BackgroundStyle} >
        <div className="temperature-main__desc">
            <p>{topPrefecture} / {topCity}</p>
            <span>
              {weather.name}
            </span>
            <h2>{weatherInfo.current_weather.temperature}℃</h2>
        </div>
    </div>
    </>
  )
}

export default TemperatureMain
