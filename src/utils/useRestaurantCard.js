import { useEffect, useState } from "react";

const useRestaurantCard = () => {
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filterListOfRestaurant, setFilteredListOfRestaurant] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        setListOfRestaurant(
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

        setFilteredListOfRestaurant(
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
    };

    return { listOfRestaurants, filterListOfRestaurant, setListOfRestaurant, setFilteredListOfRestaurant };
};

export default useRestaurantCard;