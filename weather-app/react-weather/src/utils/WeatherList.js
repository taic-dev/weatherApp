import { faBolt, faCloudShowersWater, faCloudSun,faSnowflake,faSun, faUmbrella, faWater } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const WeatherList = (weatherCode) => {
    if(weatherCode === 0) return { name: "晴天", icon: <FontAwesomeIcon icon={faSun} />, img: "img/sun.jpg"  }
    if(weatherCode === 1) return { name: "晴れ", icon: <FontAwesomeIcon icon={faSun} />, img: "img/sun.jpg"  }
    if(weatherCode === 2) return { name: "一部曇", icon: <FontAwesomeIcon icon={faCloudSun} />, img: "img/clouds-sunny.jpg"  }
    if(weatherCode === 3) return { name: "曇り", icon: <FontAwesomeIcon icon={faCloudSun} />, img: "img/clouds.jpg"  }
    if(weatherCode <= 49) return { name: "霧", icon: <FontAwesomeIcon icon={faWater} />, img: "img/fog.jpg"  }
    if(weatherCode <= 59) return { name: "霧雨", icon: <FontAwesomeIcon icon={faCloudShowersWater} />, img: "img/fog.jpg"  }
    if(weatherCode <= 69) return { name: "雨", icon: <FontAwesomeIcon icon={faUmbrella} />, img: "img/rain.jpg"  }
    if(weatherCode <= 79) return { name: "雪", icon: <FontAwesomeIcon icon={faSnowflake} />, img: "img/snow.jpg"  }
    if(weatherCode <= 84) return { name: "にわか雨", icon: <FontAwesomeIcon icon={faCloudShowersWater} />, img: "img/rain.jpg"  }
    if(weatherCode <= 94) return { name: "雪・雹", icon: <FontAwesomeIcon icon={faSnowflake} />, img: "img/snow.jpg"  }
    if(weatherCode <= 99) return { name: "雷雨", icon: <FontAwesomeIcon icon={faBolt} />, img: "img/lightning.jpg"  }
}