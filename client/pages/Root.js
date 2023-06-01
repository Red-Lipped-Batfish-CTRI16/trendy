import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar'

export default function Root() {
  
  const [userName, setUserName] = React.useState('');
  return (
    <div className = "root">

      <Navbar userName={userName}/>
      <Outlet context={[userName, setUserName]}/>

    </div>
  );
}