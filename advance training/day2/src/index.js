console.log(React)
console.log(ReactDOM);
class TodoList extends React.Component {
  render() {
    return <div>
      <Todo />
      <Todo />
      <Todo />
      <Todo />
    </div>
  }
}

function Todo(){
  return <div>
    <h4>title</h4>
    <p>todo task</p>
  </div>
}



function Counter() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = React.useState(0);
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }

ReactDOM.createRoot(document.querySelector("#root")).render(
    // <TodoList />
    <Counter />
);

