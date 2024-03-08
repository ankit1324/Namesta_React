import { useState, useEffect } from "react";
import Shimmer from "../components/Shimmer";
import { RES_IMG, MENU_URL } from "../../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantPage = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);

  return (
    <>
      <div>
        <img src={RES_IMG + cloudinaryImageId} alt="" className="res-image" />
        <h1>
          {name} - {avgRating}Rating
        </h1>
        <h2>
          {cuisines.join(", ")} - {costForTwoMessage}
        </h2>
        <ul>
          {itemCards.map((item) => {
            return (
              <li key={item.card.info.id}>
                {item.card.info.name} - {item.card.info.price / 100}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default RestaurantPage;
