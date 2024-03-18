import { useEffect, useState, useContext } from "react";
import RestaurantCard, { withTopRatedLabel } from "./RestaurantCard";
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../../utils/useRestaurantList";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestList, setFilteredRestList] = useState([]);

  const TopRatedRestaurantCard = withTopRatedLabel(RestaurantCard);

  const restList = useRestaurantList();
  // console.log(restList);

  const { loggedInUser, setUserName } = useContext(UserContext);

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
              (restaurant) => restaurant.info.avgRating > 4.5
            );
            setFilteredRestList(filterList);
          }}
          className="bg-orange-600 text-white px-4  rounded-xl transition duration-200 ease-in-out hover:bg-orange-700 active:bg-orange-900 focus:outline-none"
        >
          Top Rated Restaurant
        </button>

        <div className="ml-8 flex">
          <input
            data-testid="searchInput"
            placeholder="Search"
            type="text"
            className="bg-yellow-50 block w-56 rounded-md  px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
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
            className="bg-orange-600 text-white ml-2 px-4  rounded-xl transition duration-200 ease-in-out hover:bg-orange-700 active:bg-orange-900 focus:outline-none"
          >
            Search
          </button>
          <label className="m-2 px-2 font-medium" htmlFor="">
            Username
          </label>
          <input
            placeholder="Context-Checker"
            type="text"
            className="bg-yellow-50 block  w-56 rounded-md  px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="bg-yellow-50 m-4 p-4 flex flex-wrap">
        {filteredRestList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {/* if the restaurant have rating above 4.5 its top rated */}
            {restaurant.info.avgRating >= 4.5 ? (
              <TopRatedRestaurantCard resData={restaurant} />
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
