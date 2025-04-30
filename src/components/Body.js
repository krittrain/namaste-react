import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantCard from "../utils/useRestaurantCard";
import useOnlineStatus from "../utils/useOnlinestatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const { listOfRestaurants, filterListOfRestaurant, setListOfRestaurant, setFilteredListOfRestaurant } =
    useRestaurantCard();

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (<h1>Looks like you are offline!! Please check the internet</h1>)
  }

  const { loggedInUser, setUserName } = useContext(UserContext);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);


  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
        <div className="filter flex">
          <div className="search m-4 p-4">
            <input
              type="text"
              className="border border-solid border-black"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="px-4 py-2 bg-green-100 m-4 rounded-lg"
              onClick={() => {
                console.log("Search");
                const filteredRestaurant = listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );

                setFilteredListOfRestaurant(filteredRestaurant);
              }}
            >
              Search
            </button>
          </div>
          <div className="search m-4 p-4 flex items-center">
            {/* <button
              className="px-4 py-2 bg-gray-100 rounded-lg"
              onClick={() => {
                const filteredList = listOfRestaurants.filter(
                  (res) => res.data.avgRating > 4
                );
                setListOfRestaurant(filteredList);
              }}
            >
              Top Rated Restaurants
            </button> */}
            <lable>Username: </lable>
            <input className="border border-black p-2" value={loggedInUser} onChange={(e) => setUserName(e.target.value)} />
          </div>
        </div>
        <div className="flex flex-wrap">
          {filterListOfRestaurant.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {restaurant.info.promoted ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
