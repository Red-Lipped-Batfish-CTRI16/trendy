import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Home() {

  const [location, setLocation] = useState("");
  const [interest, setInterest] = useState("");
  const [radius, setRadius] = useState("8050");
  
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      location,
      interest,
      radius,
    };
    navigate("/main", { state: { ...formData } });
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleInterestChange = (event) => {
    setInterest(event.target.value);
  };

  const handleRadiusChange = (event) => {
    setRadius(event.target.value);
  };

  return (
    <div className="Home">
        <h1>Search</h1>
      <h3>Input a Location and Interest to View Results</h3>
      <div className = "search-form">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Location"
            value={location}
            onChange={handleLocationChange}
            required
          />
          <input
            placeholder="Interest"
            value={interest}
            onChange={handleInterestChange}
            required
          />
          <div className = "radius">
          <label>Radius:</label>
          <select id="radius" value={radius} onChange={handleRadiusChange}>
            <option className = "option" value="8050">5 miles</option>
            <option className = "option" value="16100">10 miles</option>
            <option className = "option" value="32200">20 miles</option>
            </select>
          </div>
          <div className="button-container">
            
          <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      
    </div>
  );
} 