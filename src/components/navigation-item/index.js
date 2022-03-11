import React from "react";

const NavigationItem = ({ data }) => {
  // <li></li>
  return data?.map((item) => <li key={item.id}>{item.name}</li>);
};

export default NavigationItem;
