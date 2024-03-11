import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../../utils/useRestaurantList";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestList, setFilteredRestList] = useState([]);

  const restList = useRestaurantList();

  useEffect(() => {
    setFilteredRestList(restList);
  }, [restList]);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <>
        <h1>Please Check your Internet Connection</h1>
      </>
    );
  }

  return restList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-yellow-50">
      <div className=" m-4 px-4 flex">
        <button
          onClick={() => {
            const filterList = restList.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setFilteredRestList(filterList);
          }}
          className="bg-orange-600 text-white px-4 py-2 rounded-full transition duration-200 ease-in-out hover:bg-orange-700 active:bg-orange-900 focus:outline-none"
        >
          Top Rated Restaurant
        </button>
        <div className="ml-6 flex">
          <input
            placeholder="Search"
            type="text"
            className="bg-yellow-50 block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
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
            className="bg-orange-600 text-white ml-2 px-4 py-2 rounded-full transition duration-200 ease-in-out hover:bg-orange-700 active:bg-orange-900 focus:outline-none"
          >
            Search
          </button>
        </div>
      </div>
      <div className="bg-yellow-50 m-4 p-4 flex flex-wrap">
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
    </div>
  );
};

export default Body;
