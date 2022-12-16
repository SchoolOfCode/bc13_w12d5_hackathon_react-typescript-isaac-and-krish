import { useState,useEffect } from "react";
import {Weather} from "./Model/Weather";
import {WeatherEntry }from "./WeatherEntry"
import { WeatherLocation } from "./Model/Weather";
import { readWeather } from "./Services/WeatherService";

interface WeatherSummaryProps {
    location: WeatherLocation | null;
  }

  function WeatherSummary({location}:WeatherSummaryProps){
      const [weather, setWeather] = useState<Weather | null>(null);
      useEffect(() => {
      if (location) {
        readWeather(location.id).then(weather => setWeather(weather));
      }
    }, [location]);
    if (!location || !weather) return null;

  return (
    <div>
    <hr/>
    <h2>{location.name}</h2>
    <WeatherEntry weather={weather}/>
  </div>
);
};

export default WeatherSummary
