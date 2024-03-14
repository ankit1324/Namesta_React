import { RES_IMG } from "../../utils/constants";

const itemList = ({ items }) => {
  return (
    <>
      <div>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-slate-400 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span className="w-52  font-semibold text-black-300 ">
                  {item.card.info.name}
                </span>
                <span className="font-normal">
                  - ₹
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs ">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 rounded-xl p-4 ">
              <button className="bg-slate-800 text-white hover:animate-fade shadow-lg p-1 absolute mt-24 ml-20 rounded-lg">
                Add +
              </button>
              <img
                src={RES_IMG + item.card.info.imageId}
                alt=""
                className="rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default itemList;