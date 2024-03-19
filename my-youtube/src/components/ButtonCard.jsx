import React from "react";

const ButtonCard = ({ name }) => {
  return (
    <>
      <button
        type="button"
        className="mx-2 px-4 py-1 rounded-lg font-medium  dark:bg-gray-100 dark:text-gray-800 hover:bg-gray-200"
      >
        {name}
      </button>
    </>
  );
};

export default ButtonCard;
