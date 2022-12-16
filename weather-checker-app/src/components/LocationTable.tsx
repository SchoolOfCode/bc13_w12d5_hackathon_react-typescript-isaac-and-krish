import React  from "react";

interface LocationTableProps {
    locations: string[];
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
      {locations.map((location, index) =>
        <tr key={index}><td>{location}</td></tr>
      )}
      </tbody>
    </table>
  </div>
    )
}

  