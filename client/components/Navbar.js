import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [location, setLocation] = useState('');
  const [interest, setInterest] = useState('');
  const [radius, setRadius] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = (event) => {
    event.preventDefault(); 


    const formData = {
      location,
      interest,
      radius,
    };

    fetch('/api/search', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        navigate('/main', { state: { responseData: data } });
      })
      .catch((error) => {
        console.error('Error:', error);
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
      <div>
        <h1>Trendy</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input placeholder="Location" value={location} onChange={handleLocationChange} required />
          <input placeholder="Interest" value={interest} onChange={handleInterestChange} required />
          <label>Radius:</label>
          <select id="radius" value={radius} onChange={handleRadiusChange}>
            <option value="8050">5 miles</option>
            <option value="16100">10 miles</option>
            <option value="32200">20 miles</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}