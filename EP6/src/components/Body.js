import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import mockdata from "../../utils/mockdata";

const Body = () => {
  const [restList, setRestList] = useState(mockdata.restaurants);
  const [filteredRestList, setFilteredRestList] = useState(
    mockdata.restaurants
  );
  const [searchText, setSearchText] = useState("");
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9715987&lng=77.5945627&carousel=true&third_party_vendor=1"
  //   );
  //   const json = await data.json();
  //   console.log(
  //     json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
  //   );
  //   setRestList(
  //     json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
  //   );
  // };

  if (restList.length === 0) {
    return (
      <>
        <div className="skelton-container">
          <div className="col-sm-6 col-md-3">
            <div className="movie--isloading">
              <div className="loading-image"></div>
              <div className="loading-content">
                <div className="loading-text-container">
                  <div className="loading-main-text"></div>
                  <div className="loading-sub-text"></div>
                </div>
                <div className="loading-btn"></div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="movie--isloading">
              <div className="loading-image"></div>
              <div className="loading-content">
                <div className="loading-text-container">
                  <div className="loading-main-text"></div>
                  <div className="loading-sub-text"></div>
                </div>
                <div className="loading-btn"></div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="movie--isloading">
              <div className="loading-image"></div>
              <div className="loading-content">
                <div className="loading-text-container">
                  <div className="loading-main-text"></div>
                  <div className="loading-sub-text"></div>
                </div>
                <div className="loading-btn"></div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="movie--isloading">
              <div className="loading-image"></div>
              <div className="loading-content">
                <div className="loading-text-container">
                  <div className="loading-main-text"></div>
                  <div className="loading-sub-text"></div>
                </div>
                <div className="loading-btn"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
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
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </>
  );
};

export default Body;
