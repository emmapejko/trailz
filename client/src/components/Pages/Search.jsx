/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable multiline-ternary */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../../styles/search';

const Search = ({
  updateSearchResults,
  position,
  updatePosition,
  isSearchVisible,
  setShowSRAlert,
}) => {
  const [search, setSearch] = useState('');
  const handleSearch = () => {
    const { lat, lng } = position;
    axios
      .get(`/parks/searchResults/${lat}/${lng}/${search}`)
      .then(({ data: results }) => {
        if (results.mappedResults.length) {
          updateSearchResults(results.mappedResults);
        } else {
          setShowSRAlert(true);
        }
        // updatePosition(results.position);
        setSearch('');
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      {isSearchVisible ? ( // Check if the search bar should be visible.
        <SearchBar
          className="form-control"
          type="text"
          placeholder="Search Trails"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
      ) : (
        <></>
      )}
    </div>
    function initAutocomplete() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -33.8688, lng: 151.2195 },
    zoom: 13,
    mapTypeId: "roadmap",
  });
  // Create the search box and link it to the UI element.
  const input = document.getElementById("pac-input");
  const searchBox = new google.maps.places.SearchBox(input);

  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  // Bias the SearchBox results towards current map's viewport.
  map.addListener("bounds_changed", () => {
    searchBox.setBounds(map.getBounds());
  });

  let markers = [];

  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener("places_changed", () => {
    const places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    const bounds = new google.maps.LatLngBounds();

    places.forEach((place) => {
      if (!place.geometry || !place.geometry.location) {
        console.log("Returned place contains no geometry");
        return;
      }

      const icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25),
      };

      // Create a marker for each place.
      markers.push(
        new google.maps.Marker({
          map,
          icon,
          title: place.name,
          position: place.geometry.location,
        })
      );
      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}
  );
};

export default Search;
