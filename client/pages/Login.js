import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [isSignUp, setIsSignUp] = useState(false); // Track if signup button was clicked
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isSignUp) {
      fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, location }),
      })
        .then((response) => response.json())
        .then((userData) => {
          navigate("/", { state: { user: userData } });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      fetch("/api/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, location }),
      })
        .then((response) => response.json())
        .then((userData) => {
          navigate("/", { state: { user: userData } });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className="login">
      <h1>Login or Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={handleUsernameChange}
          placeholder="username"
          required
        />
        <input
          value={location}
          onChange={handleLocationChange}
          placeholder="location"
          required
        />
        <button
          type="button"
          onClick={() => setIsSignUp(true)} // Set isSignUp to true on signup button click
        >
          Sign up
        </button>
        <button
          type="submit"
          onClick={() => setIsSignUp(false)} // Set isSignUp to false on login button click
        >
          Login
        </button>
      </form>
    </div>
  );
}







