import React from "react";

const CommentsItem = ({ data }) => {
  return (
    <>
      {data?.map((item) => {
        return (
          <div>
            <div style={{ backgroundImage: `url(${item.image})` }}>
              <h2>{item.name}</h2>
              <p>{item.date}</p>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CommentsItem;
