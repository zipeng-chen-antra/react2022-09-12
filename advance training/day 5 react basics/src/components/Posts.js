import React, { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        data.sort((a, b) => b.id - a.id);
        console.log("data resolved", data);
        setPosts(data);
      });
  }, []);

  return (
    <div>
      <div>
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
