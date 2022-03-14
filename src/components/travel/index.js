import React from "react";
import { travels } from "../../data/travel";
import TravelItem from "../travel-item";

export default function Travels() {
  const dataTravels = travels;
  return (
    <>
      <TravelItem data={dataTravels} />
    </>
  );
}
