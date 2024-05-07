import { useState, useEffect } from 'react';
import NotFound from './components/NotFound';
import WeatherDisplay from './components/WeatherDisplay';
import SearchBox from './components/SearchBox';
import './App.css';

function App() {
  const [city, setCity] = useState(""); // 도시 이름 상태 관리
  const [weather, setWeather] = useState(null);
  const API_KEY = "74650bcc717af82a000e34d185d2d069";

  const getCurrentLocation= () =>{
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lot = position.coords.longitude;
      console.log(lat, lot);
      getWeatherbyCurrentLocation(lat,lot);
    })
  }

  const getWeatherbyCurrentLocation= async (lat,lon)=>{    
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    
    setWeather(data);
    console.log(data.name)
  }
  
  const getWeatherByCity = async() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to fetch weather data');
        }

        setWeather(data); // 정상적인 데이터 응답
    } catch (error) {
        console.error('Fetch error:', error);
        setWeather({ error: true, message: error.message }); // 오류 발생 시
    }
  }
  

  useEffect(() => {    
    if (city === "") {      
      getCurrentLocation();
    } else {
      getWeatherByCity(city);      
    }
  }, [city])


  const handleCityChange = (currentCity) => {
    console.log("click", currentCity);
    if(currentCity ==="current") {
      setCity("");      
      
    }else{
      setCity(currentCity);
      console.log("city :", city)
    }
  };

  return (

    <div className="container">  
    <SearchBox handleCityChange={handleCityChange}/>  
    {weather && !weather.error ? (
      <WeatherDisplay weather={weather} />
    ) : (
      <NotFound />
    )}
    
  </div>
);
}
export default App;
