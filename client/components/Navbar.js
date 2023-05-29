import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [location, setLocation] = useState("");
  const [interest, setInterest] = useState("");
  const [radius, setRadius] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      location,
      interest,
      radius,
    };

    //cant pass a body into GET requests? 
    // body: JSON.stringify(formData),

    fetch("/api/search", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((response) => response.json())
      .then((data) => {
        
        navigate("/main", { state: { responseData: data } });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
    <div className="Navbar">
      <div><h1>TRENDY</h1></div>
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
