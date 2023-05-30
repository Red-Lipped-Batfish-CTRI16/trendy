import Carousel from "../containers/Carousel";
import AppCard from "../components/AppCard";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Main() {
  const formData = useLocation().state;

  const [cardsData, setcardsData] = useState([]); // Use state to store the cards

  const [isLoading, setIsLoading] = useState(true);

  const truncateLink = (url) => {
    const maxLength = 40; // Maximum length of the displayed link
    if (url.length > maxLength) {
      return url.substring(0, maxLength) + "...";
    }
    return url;
  };
  useEffect(() => {
    setIsLoading(true);
    fetch("/api/search?" + new URLSearchParams({ ...formData }), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setcardsData([...data]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [formData]);
  
  const cardElements = cardsData.map((card, index) => (
    <div key={index} className="card">
      <h1>{card.name}</h1>
      <img src={card.image_url} />
      <p>Score: {Math.round(card.averageScore * 100)}/100</p>
      <p>
        Category: {card.categories.map((category) => category.title).join(", ")}
      </p>
      <p>Address: {card.location.join(", ")}</p>
      <p>{truncateLink(card.url)}</p>
    </div>
  ));

  return (
    <div>
      
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Carousel>
        <div className="cardDisplay">{cardElements}</div>
        </Carousel>
      )}
    </div>
  );
}

// return (
//   <>
//     {image ? (
//       <img src={image} className="poster" />
//       ) : (
//       <p>Loading...</p>
//       )}
//     </>
// )
// }

// export default BlurredPoster;
