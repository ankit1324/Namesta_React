import { useState } from "react";
import resList from "../../utils/mockdata";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [restList, setRestList] = useState(resList.restaurants);
  return (
    <>
      <div className="filter">
        <button
          onClick={() => {
            const filterList = restList.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setRestList(filterList);
          }}
          className="button"
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="card-container">
        {restList.map((restaurant) => (
          <RestaurantCard resData={restaurant} />
        ))}
      </div>
    </>
  );
};

export default Body;
