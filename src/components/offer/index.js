import React from "react";
import { offers } from "../../data/offer";
import OffersItem from "../offer-item";

export default function Offers() {
  const dataOffers = offers;
  return (
    <>
      <OffersItem data={dataOffers} />
    </>
  );
}
