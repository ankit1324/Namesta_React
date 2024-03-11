import Shimmer from "../components/Shimmer";
import { RES_IMG } from "../../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantPage = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

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
        <div className="m-4 p-4 flex  justify-center">
          <img
            src={RES_IMG + cloudinaryImageId}
            alt=""
            className="w-96 h-96 rounded-full"
          />
        </div>
        <div className="m-4 p-4 flex-col text-center justify-center">
          <h1 className="font-semibold text-6xl mb-6">
            {name} - {avgRating}⭐
          </h1>
          <h2 className="font-medium text-3xl mb-6">
            {cuisines.join(", ")} - {costForTwoMessage}
          </h2>
          <h2 className="font-medium underline underline-offset-8 text-3xl mb-6">
            Menu
          </h2>
          <ul>
            {itemCards.map((item) => {
              return (
                <li className="mb-2 font-semibold" key={item.card.info.id}>
                  {item.card.info.name} - ₹{item.card.info.price / 100}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RestaurantPage;
