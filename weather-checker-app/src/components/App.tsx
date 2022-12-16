import React from 'react';
import './App.css';
import {useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import LocationSearch from './LocationSearch';
import LocationTable from "./LocationTable";


function App() {
  
  // const [locations, setLocations] = useState<string[]>(["New York", "Dublin"])
 
  // const addLocation = () => {
  //   setLocations([locationSearch, ...locations]);
  //   setLocationSearch('');
  // };

  const [locations, setLocations] = useState<string[]>(["Dublin","Belfast"]);
  const addLocation = (location: string) => setLocations([location, ...locations]);
  

  return (
<div className="container">
  <h1>Weather App</h1>
<LocationSearch onSearch={addLocation}/>      
<LocationTable locations={locations}/>
        
        </div>
  
  );
}

export default App;
