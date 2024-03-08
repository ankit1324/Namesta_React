import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [restList, setRestList] = useState([]);
  const [filteredRestList, setFilteredRestList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://food-sale-server.vercel.app/api/restaurants2?"
    );
    const json = await data.json();
    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setRestList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (restList.length === 0) {
    return <Shimmer />;
  }

  return (
    <>
      <div className="filter">
        <button
          onClick={() => {
            const filterList = restList.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setFilteredRestList(filterList);
          }}
          className="button"
        >
          Top Rated Restaurant
        </button>
        <div className="searchContainer">
          <input
            placeholder="Search"
            type="text"
            className="input"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const searchedList = restList.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestList(searchedList);
            }}
            className="button"
          >
            Search
          </button>
        </div>
      </div>
      <div className="card-container">
        {filteredRestList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {" "}
            <RestaurantCard resData={restaurant} />{" "}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
