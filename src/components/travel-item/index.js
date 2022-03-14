import React from "react";

const TravelItem = ({ data }) => {
  return (
    <>
      {data?.map((item) => {
        return (
          <div style={{ backgroundImage: `url(${item.image})` }}>
            {/* <img src={item.image} alt="Italian Trulli" /> */}
            <h2>{item.name}</h2>
            <p>{item.date}</p>
            <span>{item.price}</span>
            <button>SEE MORE ...</button>
          </div>
        );
      })}
    </>
  );
};

export default TravelItem;
