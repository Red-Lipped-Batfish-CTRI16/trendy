import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar(props) {
  
  const navigate = useNavigate();
  
  const [userName, setUserName] = useState(props.userName);
  console.log('Navbar rendered');
  
  return (
    <div className="Navbar">
      <div>
        <a href={`/home`}>
        Home
        </a>
      </div>
      
      <div>
        <a href={`/favorites`}>
        Favorites
        </a>
      </div>
      
      <div>
        <a href={`/saved`}>
        Saved
        </a>
      </div>
      
      { props.userName === ''
      ? 
      <div>
        <button onClick={() => navigate("/login")}>Login or Sign Up</button>
      </div>
      :
      <div className="loggedInAs">
        Logged in as: {props.userName}
      </div>
    }
    </div>
  );
}
