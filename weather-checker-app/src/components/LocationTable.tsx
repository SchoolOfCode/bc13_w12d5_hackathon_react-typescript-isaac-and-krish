import React from "react";
import { WeatherLocation } from "./Model/Weather";

interface LocationTableProps {
  locations: WeatherLocation[];
}
function LocationTable({ locations }: LocationTableProps){
  return(
      <div>
  <h2>Locations</h2>
  <table className="table table-hover">
    <thead>
    <tr>
      <th>Name</th>
    </tr>
    </thead>
    <tbody>
    {locations.map(location =>
        <tr><td>{location.name}</td></tr>
    )}
    </tbody>
  </table>
</div>
  )
}
export default LocationTable;
  