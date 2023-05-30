import Carousel from "../containers/Carousel";
import AppCard from "../components/AppCard";

export default function Main() {
  let location = useLocation();
  const { responseData } = location.state;

  useEffect(() => {
    const cards = responseData.map((card, index) => {
      <div key={index} className="card">
        <h1>{card.name}</h1>
        <p>{card.rating}</p>
        <img url={card.image_url} />
        <p>{card.url}</p>
        <p>{card.categories}</p>
        <p>{card.location}</p>
      </div>;
    });
  }, [location]);

  //

  return (
    <div className="Main">
      <h1>Trending *User Input* near *User Location*</h1>
      <div className="main-image">
        <img src="./image/map.png"></img>
      </div>
      <Carousel />
    </div>
  );
}
