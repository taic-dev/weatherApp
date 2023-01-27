import React from 'react'
import { WeatherList } from './WeatherList';

const TemperatureWeek = ({ weatherInfo }) => {

  return (
    <div className="temperature-week">
        <ul className="temperature-week__list">
            {(()=>{
                const list = [];
                for(let i=0;i<7;i++){
                    let weather = WeatherList(weatherInfo.daily.weathercode[i]);
                    list.push(
                        <li key={i} className="temperature-week__item">
                            <span>{weatherInfo.daily.time[i].slice(-5).replace("-","/")}</span>
                            <span>{weather.icon}</span>
                            <div className="temperature-week__range">
                                <span>{weatherInfo.daily.temperature_2m_max[i]}℃</span>
                                <span>/</span>
                                <span>{weatherInfo.daily.temperature_2m_min[i]}℃</span>
                            </div>
                        </li>
                    )
                }
                return <>{list}</>;
            })()}
        </ul>
    </div>
  )
}

export default TemperatureWeek
