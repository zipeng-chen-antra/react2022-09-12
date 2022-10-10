import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./Counter";
import "./style/index.css";
import { sum } from "./util";

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </div>
    );
  }
}

function Todo() {

  return (
    <div>
      <h4>title</h4>
      <div>{sum(1, 2)}</div>
      <p>todo task</p>
    </div>
  );
}

ReactDOM.createRoot(document.querySelector("#root")).render(
  <div>
    <TodoList />
    <Counter />
  </div>
);
