import React from 'react';
import './App.css';
import {useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import LocationSearch from './LocationSearch';
import LocationTable from "./LocationTable";
import { searchLocation } from './Services/WeatherService';
import { WeatherLocation } from './Model/Weather';
import WeatherSummary from './WeatherSummary';


function App() {
  const [currentLocation, setCurrentLocation] = useState<WeatherLocation | null>(null);
  const resetAlerts = () => {
    setError('');
    setWarning('');
  }
  let addLocation = async (term: string) => {
    resetAlerts();
    const location = await searchLocation(term);
    if (!location) {
      setError(`No location found called '${term}'`);
    } else if (locations.find(item => item.id === location.id)) {
      setWarning(`Location '${term}' is already in the list.`);
    } else {
      setLocations([location, ...locations]);
    }
  };
  const [locations, setLocations] = useState<WeatherLocation[]>([]);
  const [error, setError] = useState('');
  const [warning, setWarning] = useState('');
 
  return (
    <div className="container">
    <h1>Weather App</h1>
    
    <LocationSearch onSearch={addLocation}/>
    {
      error
        ? <div className={`alert alert-danger`}>{error}</div>
        : null
    }
    {
      warning
        ? <div className={`alert alert-warning`}>{warning}</div>
        : null
    }
   <LocationTable locations={locations}
                     current={currentLocation}
                     onSelect={location => setCurrentLocation(location)}/>
                     <WeatherSummary location={currentLocation}/>
  </div>
);
}
export default App;