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
        <div className="loader_div">
          <div
            aria-label="Orange and tan hamster running in a metal wheel"
            role="img"
            className="wheel-and-hamster"
          >
            <div className="wheel"></div>
            <div className="hamster">
              <div className="hamster__body">
                <div className="hamster__head">
                  <div className="hamster__ear"></div>
                  <div className="hamster__eye"></div>
                  <div className="hamster__nose"></div>
                </div>
                <div className="hamster__limb hamster__limb--fr"></div>
                <div className="hamster__limb hamster__limb--fl"></div>
                <div className="hamster__limb hamster__limb--br"></div>
                <div className="hamster__limb hamster__limb--bl"></div>
                <div className="hamster__tail"></div>
              </div>
            </div>
            <div className="spoke"></div>
          </div>
          <h1>Please Check your Internet Connection</h1>
        </div>
      </>
    );
  }

  return restList.length === 0 ? (
    <Shimmer />
  ) : (
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
