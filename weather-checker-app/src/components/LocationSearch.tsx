import React from "react";
import {useState} from "react";

interface LocationSearchProps {
    onSearch: (search: string) => void;
  }

function LocationSearch(props: LocationSearchProps){
    const [locationSearch, setLocationSearch] = useState('');
  const disableSearch = locationSearch.trim() === '';

  const addLocation = () => {
    props.onSearch(locationSearch); // Prop callback invoked - string passed
    setLocationSearch('');
  };

    return (
        <div>
          <label>
            Add Location
            <input className="ml-1 mr-1" type="text" value={locationSearch}
                   onChange={e => setLocationSearch(e.target.value)}
                   placeholder="Enter Location Here"/>
          </label>
          <button className="btn btn-primary"
                  onClick={addLocation} disabled={disableSearch}>Search</button>
        </div>
      );
}
export default LocationSearch


  