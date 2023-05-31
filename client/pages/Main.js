import Carousel from "../containers/Carousel";
import AppCard from "../components/AppCard";
import { useLocation } from "react-router-dom";
// useLocation Hook: It allows you to access and interact with the current location object in your components.
// you can retrieve the current location information, including the pathname, search parameters, and hash

import { useEffect, useState } from "react";

export default function Main() {
  const formData = useLocation().state;

  const [cardsData, setcardsData] = useState([]); // Use state to store the cards
  // cardsData contains comments

  const [isLoading, setIsLoading] = useState(true);

  // Do we need this??
  const truncateLink = (url) => {
    const maxLength = 40; // Maximum length of the displayed link
    if (url.length > maxLength) {
      return url.substring(0, maxLength) + "...";
    }
    return url;
  };
  
  useEffect(() => {
    setIsLoading(true); // add loading gif
    fetch("/api/search?" + new URLSearchParams({ ...formData }), {
      // URLSearchParams: query parameters of a URL. 
      // It allows you to construct, manipulate, and retrieve query parameters from a URL string or a URL object.
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
      .then((data) => {
        setcardsData(data.sort((a, b) => b.averageScore - a.averageScore));
        console.log(cardsData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [formData]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p> // display super fun gif 
      ) : (<Carousel data={cardsData} />)}
    </div>
  );
}