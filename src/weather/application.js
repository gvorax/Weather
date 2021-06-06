import React, { useState } from "react";
import FetchWeatherApi from "./api/fetchWeatherApi";

function Application() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [error, setError] = useState(false);

  const search = async (e) => {
    if (e.key === "Enter") {
      try {
        const data = await FetchWeatherApi(query);
        console.log(data);
        setWeather(data);
        setError(false);
        setQuery("");
      } catch (error) {
        setWeather("");
        setError(true);
        setQuery("");
        setTimeout(() => {
          window.location.replace("/Weather");
        }, 3000);
      }
    }
  };
  const handler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handler}>
      <div className="main-container">
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={search}
          />
        </div>
        {weather.main && (
          <div className="weather-card">
            <div className="info">
              <img
                className="city-icon"
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
              />
            </div>
            <div className="details">
              <h2 className="city-name">
                <span>{weather.name}</span>
                <sup>{weather.sys.country}</sup>
              </h2>
              <div className="temp">
                {Math.round(weather.main.temp)}
                <sup>&deg;C</sup>
                <p>{weather.weather[0].description}</p>
              </div>
            </div>
          </div>
        )}
        {error && (
          <div className="weather-card">
            <h3 className="weather-error">
              Siz kiritgan shahar topilmadi ! Iltimos tekshirib qaytadan
              kiriting !
            </h3>
          </div>
        )}
      </div>
    </form>
  );
}

export default Application;
