import { RES_IMG } from "../../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <>
      <div className="bg-yellow-100 rounded-lg w-[220px] h-96 m-2 p-2 hover:bg-yellow-200">
        <img
          className="h-48 w-48 ml-2 rounded-xl"
          src={RES_IMG + resData.info.cloudinaryImageId}
          alt=""
        />
        <div className="mb-8 h-20 card-info">
          <p className="m-2 text-base font-medium">{resData.info.name}</p>
          <p className="m-2 text-sm font-extralight">
            {resData.info.cuisines.join(", ")}
          </p>
        </div>
        <div className="card-footer">
          <span className="m-2 font-medium mr-4">
            {resData.info.costForTwo}
          </span>
          <span className="m-2 font-medium">{resData.info.avgRating}⭐</span>
          <div className="card-button"></div>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
