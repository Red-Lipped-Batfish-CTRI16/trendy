import Carousel from "../containers/Carousel";
import SavedCarousel from "../containers/SavedCarousel";
import React, { useEffect, useState } from "react";
import saved from "../containers/testData";
import { useLocation } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

export default function Saved(props) {
  const [isLoading, setIsLoading] = useState(true);
  // use useEffect & useState on render to grab info and pass it into data (where {saved} is)
  const [userName, setUserName] = useOutletContext();
  const [savedList, setSavedList] = useState([]);

  useEffect(() => {
    const savedData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/save/${userName}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
        const savedListArr = await response.json();
        console.log("this is savedlist", savedListArr);
        setSavedList(savedListArr);
        setIsLoading(false);

        // setSavedList(savedListArr)
      } catch (err) {
        return err;
      }
      // finally {
      // setIsLoadin
      // }
    };

    savedData();
  }, [userName]);

  return isLoading ? (
    <div>loading...</div>
  ) : (
    <div className="Saved">
      <h1>Saved</h1>
      <div>
        {isLoading}
        <SavedCarousel data={savedList}></SavedCarousel>
      </div>
    </div>
  );
}
