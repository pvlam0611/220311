import React from "react";
import { navigations } from "../../data/navigation";
import NavigationItem from "../navigation-item";

const Navigations = () => {
  const data = navigations;
  // <ul>
  // </ul>
  return (
    <ul>
      <NavigationItem data={data} />
    </ul>
  );
};

export default Navigations;
