import React from "react";
import { generateDescriptionPreview } from "./PostCardUtils";
import "./PostCard.css";

const PostCard = ({post}) => {
  return (
      <div className={"PostCard"}>
          <div className={"card"}>
              <img src={post.image} alt={post.title} className={"card-img-top"} />
              <div className={"card-body"}>
                  <h5 className={"card-title"}>{post.title}</h5>
                  <p className={"card-text"}>{generateDescriptionPreview(post.description)}</p>
              </div>
          </div>
      </div>
  )
};

export { PostCard };
