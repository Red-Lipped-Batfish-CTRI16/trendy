import React, {useState} from "react";
import { Outlet } from "react-router-dom";
// Outlet: used to render the child components based on the current route.
// serves as a placeholder where the matched child components will be rendered
import Navbar from '../components/Navbar'

export default function Root() {
  const [displayName, setDisplayName] = useState('');
  // const [isLoggedIn, setLoggedIn] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(null);
  console.log(isLoggedIn)
  return (
    <>
      <Navbar displayName={[displayName, setDisplayName]} isLoggedIn={[isLoggedIn, setLoggedIn]} />
      <div className="main-container">
        <Outlet context={{ displayName, setDisplayName, isLoggedIn, setLoggedIn }}></Outlet>
      </div>
    </>
  );
}

