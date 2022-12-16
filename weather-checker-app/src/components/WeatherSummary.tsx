import { useState,useEffect } from "react";
import {Weather} from "./Model/Weather";
import {WeatherEntry }from "./WeatherEntry"
import WeatherLocation from "./LocationTable"

interface WeatherSummaryProps {
    location: WeatherLocation | null;
    readWeather: (location:WeatherLocation)
  }

  function WeatherSummary({location, readWeather}:WeatherSummaryProps){
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
