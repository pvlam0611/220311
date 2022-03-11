import React from "react";
import { travels } from "../../data/travel";
import TravelItem from "../travel-item";

const Travels = () => {
  const data = travels;
  // <ul>
  // </ul>
  return (
    <ul>
      <TravelItem data={data} />
    </ul>
  );
};

export default Travels;
