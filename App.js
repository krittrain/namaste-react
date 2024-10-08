import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - Restaurant Card
 *      - Img
 *      - Name of Res, Star Rating, cuisine, delery tie
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>Rs {costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

const resList = [
  {
    type: "restaurant",
    data: {
      type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      id: "25620",
      name: "KFC",
      city: "1",
      area: " BTM layout",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/69e69c55-d2bb-4207-8310-131fc693f78a_25620.JPG",
      address:
        "Shop No:13,16 & 17, Egipura Village,Intermediate Ring Road, Koramangala, Bangalore - 5600095",
      locality: "Intermediate Ring Road",
      areaName: "Ejipura",
      costForTwo: "40000",
      costForTwoMessage: "₹400 FOR TWO",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.3,
      deliveryTime: 36,
    },
  },
  {
    type: "restaurant",
    data: {
      type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      id: "656392",
      name: "Subway",
      city: "1",
      area: "Koramangala",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/93b4a909-a1f1-4eb3-9e07-34a52becf7fa_656392.jpg",
      address:
        "Shop No:13,16 & 17, Egipura Village,Intermediate Ring Road, Koramangala, Bangalore - 5600095",
      locality: "1st Block",
      areaName: "Koramangala",
      costForTwo: "35000",
      costForTwoMessage: "₹350 FOR TWO",
      cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
      avgRating: 4.3,
      deliveryTime: 36,
    },
  },
  {
    type: "restaurant",
    data: {
      type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      id: "613421",
      name: "Kwality Walls Ice Cream and More",
      city: "1",
      area: " BTM layout",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/b3739937-c8ca-40ea-96cd-03b049b4600e_613421.JPG",
      address:
        "Shop No:13,16 & 17, Egipura Village,Intermediate Ring Road, Koramangala, Bangalore - 5600095",
      locality: "6th Block",
      areaName: "Ejipura",
      costForTwo: "20000",
      costForTwoMessage: "₹200 FOR TWO",
      cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
      avgRating: 4.8,
      deliveryTime: 15,
    },
  },
  {
    type: "restaurant",
    data: {
      type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      id: "5934",
      name: "Burger King",
      city: "1",
      area: " BTM layout",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5934.JPG",
      address:
        "Shop No:13,16 & 17, Egipura Village,Intermediate Ring Road, Koramangala, Bangalore - 5600095",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "40000",
      costForTwoMessage: "₹400 FOR TWO",
      cuisines: ["Burgers", "American"],
      avgRating: 4.3,
      deliveryTime: 22,
    },
  },
  {
    type: "restaurant",
    data: {
      type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      id: "25620",
      name: "The Belgian Waffle Co.",
      city: "1",
      area: " BTM layout",
      cloudinaryImageId: "5116a385bac0548e06c33c08350fbf11",
      address:
        "Shop No:13,16 & 17, Egipura Village,Intermediate Ring Road, Koramangala, Bangalore - 5600095",
      locality: "K.H.B Colony",
      areaName: "Koramangala",
      costForTwo: "20000",
      costForTwoMessage: "₹200 FOR TWO",
      cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
      avgRating: 4.3,
      deliveryTime: 36,
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
