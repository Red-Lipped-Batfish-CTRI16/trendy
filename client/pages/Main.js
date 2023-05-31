import Carousel from "../containers/Carousel";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Main() {
  const formData = useLocation().state;
  const [cardsData, setcardsData] = useState([]); // Use state to store the cards
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/api/search", {
        params:{ ...formData },        
        headers: {
          "Content-Type": "application/json",
        }
      })
      .then((response) => {
        console.log(response.data); 
        setcardsData(response.data.sort((a, b) => b.averageScore - a.averageScore));
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [formData]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Carousel data={cardsData}/>
      )}
    </div>
  );
}