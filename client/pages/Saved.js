import Carousel from "../containers/Carousel";


export default function Saved() {
  const testData = {
    averageScore: 0.607181818181818,
    categories: [
      {
        alias:"lounges",
        title: "Lounges"
      },
      {
        alias: "cocktailbars",
        title: "Cocktail Bars"
      }
    ],
    comments: [
      '701 Grant St', 'Denver, CO 80203', '3.2 miles away from Salita', '5.3 miles away from Salita', 'Yelp users haven’t asked any questions yet about Salita.', "Your trust is our top concern, so businesses can't pay to alter or remove their reviews. Learn more.", 'Start your review of Salita.', 'What a great find!! The same bartenders from the g…xt door and the food there is the best in Denver!', 'What an experience!! Very inviting atmosphere from…to visit other Bonnano Concepts, Luca and Mizuna.', "Holy sh*t. That sums up perfectly our experience a…rth it if you're looking to try something unique!", 'The new and currently top of their game living roo… would be suite6A. Live, love, laugh, and cheers!', "Top notch beverages and service. If it's not on th…ar seating and cozy little booths. Will go again!"
    ],
    id: "8nkTuIb_L6jVGdhBNaLKmQ",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/qYkHRlcLfGjTKyjfW-xuaQ/o.jpg",
    location: ["701 Grant St","Denver, CO 80203"],
    name: "Salita",
    url: "https://www.yelp.com/biz/salita-denver?adjust_creative=jwV6sY1jtf2pWAyq1ig0sQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=jwV6sY1jtf2pWAyq1ig0sQ"
  }

  return (
    <div className="Saved">
        <h1>Saved</h1>
      <h3>your SAVED data ... </h3>
      under construction
    <div>
      {/* <Carousel >
      data=[
        testData,
        testData,
        testData,
        testData,
        testData
      ]
      </Carousel> */}
    </div>
    </div>
);
}