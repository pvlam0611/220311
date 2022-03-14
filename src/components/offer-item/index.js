import React from "react";

const OffersItem = ({ data }) => {
  return (
    <>
      {data?.map((item) => {
        return (
          <div>
            <div style={{ backgroundImage: `url(${item.image})` }}>
              <h2>{item.name}</h2>
            </div>
            <p>{item.price}</p>
            <span>{item.text}</span>
            <img src="/images/icon1.png" alt=" " />
            <img src="/images/icon2.png" alt=" " />
            <img src="/images/icon3.png" alt=" " />
            <img src="/images/icon4.png" alt=" " />
            <p>READ MORE</p>
          </div>
        );
      })}
    </>
  );
};

export default OffersItem;
