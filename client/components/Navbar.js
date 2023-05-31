import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [location, setLocation] = useState("");
  const [interest, setInterest] = useState("");
  const [radius, setRadius] = useState("8050"); // radius takes in meters
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
  
  // turn handle into one function
  // add name/id attribute to input fields (location, interest, radius)
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
    <div className="Navbar">
      <div>
        {/** remove empty div? */}
      </div>
      <div>
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
          <label>Radius:</label>
          <select id="radius" value={radius} onChange={handleRadiusChange}>
            {/*  value in distance in meters. Convert miles into meters? */}
            <option value="8050">5 miles</option>
            <option value="16100">10 miles</option>
            <option value="32200">20 miles</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <button onClick={() => navigate("/login")}>Login or Sign Up</button>
      </div>
    </div>
  );
}
