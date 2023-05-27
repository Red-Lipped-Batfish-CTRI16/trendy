import Carousel from "../containers/Carousel";
import AppCard from "../components/AppCard"

export default function Main() {
  return (
    <div className="Main">
      <h1>Trending *User Input* near *User Location*</h1>
        <div className="main-image">

        <img src="./image/map.png"></img>
        </div>
      <Carousel/>      
    
    </div>
  )
} 