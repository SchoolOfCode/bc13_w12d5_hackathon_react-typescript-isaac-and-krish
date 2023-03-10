import React from "react";
import {Weather} from "./Model/Weather";
import {getIconUrl} from "./Services/WeatherService";

interface WeatherEntryProps {
    weather: Weather;
}

export function convertUnixTimeToDate(unixUtc: number): Date {
  return new Date(unixUtc * 1000);
}
export function WeatherEntry({weather}:WeatherEntryProps){

    return(
        <div>
    <div>{convertUnixTimeToDate(weather.dt).toLocaleTimeString()}</div>
    <div>
      <strong>{weather.main.temp}°C</strong>
      <div>({weather.main.temp_min}°C / {weather.main.temp_max}°C)</div>
    </div>
    <div>Humidity: {weather.main.humidity}%</div>
    {weather.weather.map(condition =>
      <div key={condition.id}>
        <img src={getIconUrl(condition.icon)} alt={condition.main}/> {condition.main} {condition.description}
      </div>)
    }
  </div>
    )
}

  