import React from 'react'
import { WeatherList } from './WeatherList'

const TemperatureTime = ({ weatherInfo }) => {

    return (
        <div className="temperature-time">
            <ul className="temperature-time__slider">
                {(()=>{
                    const list = [];
                    for(let i=0;i<24;i++){
                        let weather = WeatherList(weatherInfo.hourly.weathercode[i]);
                        list.push(
                            <li key={i} className="temperature-time__item">
                                <span>{weatherInfo.hourly.time[i].slice(-5)}</span>
                                <span>{weather.icon}</span>
                                <span>{weatherInfo.hourly.temperature_2m[i]}℃</span>
                            </li>
                        )
                    }
                    return <>{list}</>;
                })()}
            </ul>
        </div>
    )
}

export default TemperatureTime
