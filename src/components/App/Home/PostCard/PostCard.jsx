import React from "react";

const PostCard = ({post}) => {
  return (
      <div className={"PostCard"}>
          <div className={"card"}>
              <img src={post.imageUrl} alt={post.title} className={"card-img-top"} />
              <div className={"card-body"}>
                  <h5 className={"card-title"}>{post.title}</h5>
              </div>
          </div>
      </div>
  )
};

export { PostCard };
