import React from "react";
import { comments } from "../../data/comment";
import CommentsItem from "../comment-item";

export default function Comments() {
  const dataComments = comments;
  return (
    <>
      <CommentsItem data={dataComments} />
    </>
  );
}
