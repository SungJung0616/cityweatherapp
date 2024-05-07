import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWater, faWind } from '@fortawesome/free-solid-svg-icons';
import ClipLoader from "react-spinners/ClipLoader";

const WeatherDisplay = ({ weather }) => {
  if (!weather) {
    return <div className="loader-container"><ClipLoader color="#000000" loading={true} size={50} /></div>; // 날씨 데이터가 없을 때 로딩 메시지 표시
  }

  // 데이터가 있을 경우, 안전하게 날씨 정보를 렌더링
  return (
    <div>
      <div className="weather-box">
        <h2>{weather.name}</h2>
        <img src={`./images/${weather.weather[0].main.toLowerCase()}.png`} alt="Weather Icon" />
        <p className="temperature">{parseInt(weather.main.temp)}°C</p>
        <p className="description">{weather.weather[0].description}</p>
      </div>
      <div className="weather-details">
        <div className="humidity">
          <FontAwesomeIcon icon={faWater} />
          <div className="text">
            <span>{weather.main.humidity}%</span>
            <p>Humidity</p>
          </div>
        </div>
        
        <div className="wind">
          <FontAwesomeIcon icon={faWind} />
          <div className="text">
            <span>{parseInt(weather.wind.speed)} Km/h</span>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherDisplay;
