import React from "react";
import ButtonCard from "./ButtonCard";

const ButtonList = () => {
  return (
    <div className="m-2 flex">
      <ButtonCard name="All" />
      <ButtonCard name="Sports" />
      <ButtonCard name="Movies" />
      <ButtonCard name="Live" />
      <ButtonCard name="Javascript" />
      <ButtonCard name="Gaming" />
      <ButtonCard name="South" />
      <ButtonCard name="Food" />
      <ButtonCard name="Cricket" />
      <ButtonCard name="Football" />
    </div>
  );
};

export default ButtonList;
