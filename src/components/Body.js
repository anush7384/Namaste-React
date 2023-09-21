import { useState, useEffect } from "react";

import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const arrayOfCards = json.data.cards;
    const restaurant_list = "restaurant_grid_listing";

    for (const cardObj of arrayOfCards) {
      if (cardObj.card.card && cardObj.card.card.id === restaurant_list) {
        const resData =
          cardObj.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurants(resData);
      }
    }
  };

  if (listOfRestaurants.length === 0) return <h1>Loading....</h1>;

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 3.5
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
