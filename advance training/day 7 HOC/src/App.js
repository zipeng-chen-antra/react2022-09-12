import { useState, useEffect } from "react";
import CounterClass from "./components/CounterClass";
import CounterFn from "./components/CounterFn";
import PostList from "./components/PostList";
import StockFn from "./components/StockFn";



export default function App() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setPosts(data);
          setLoading(false);
        }, 2000);
      });
  }, []);

  return (
    <div>
      <PostList posts={posts} loading={loading}/>
      {/* <CounterFn message="message"/> */}
      {/* <StockFn />
      <Button text="click me" style={{backgroundColor:"red"}}></Button> */}

    </div>
  );
}


function Button({style,text}){
  return <button style={style}>
    {text}
  </button>
}


