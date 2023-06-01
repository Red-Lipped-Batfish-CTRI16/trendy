import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      location,
      interest,
      radius,
    };
    navigate("/main", { state: { ...formData, username: props.userName } });
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

  const [userName, setUserName] = useState(props.userName);
  console.log("this is inside navbar", props.userName);

  return (
    <div className="Navbar">
      <div>
        <Link to={"/home"}>TrendySearch</Link>
      </div>

      <div>
        <Link to={"/favorites"}>Favorites</Link>
      </div>

      <div>
        <Link
          to={{
            pathname: "/saved",
            state: { userName: "carrots" },
          }}
        >
          Saved
        </Link>
      </div>

      {/* //   <Link
      to={{
        pathname: '/target',
        state: { props: myProps }
      }} */}

      {props.userName === "" ? (
        <div>
          <button onClick={() => navigate("/login")}>Login or Sign Up</button>
        </div>
      ) : (
        <div className="loggedInAs">Logged in as: {props.userName}</div>
      )}
    </div>
  );
}
