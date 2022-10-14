import React, { useEffect, useState } from "react";
import { withLoader } from "../hoc/withLoader";

export function PostList({posts }) {
  

  return (
    <div>
      <h1>PostList</h1>

      <div className="posts-container">
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <div>{post.id}</div>
              <div>{post.title}</div>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default withLoader(PostList);
