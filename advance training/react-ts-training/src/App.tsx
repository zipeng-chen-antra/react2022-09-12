import React from 'react';
import Button from './button/Button';
import Card from './card/Card';
import Counter from './Counter';
import SearchResult from './SearchResult';
import TodoList from './TodoList';

function App() {



  return (
    <div className="App">
      {/* <Counter />
      <TodoList /> */}
      {/* <SearchResult url='www.youtube.com' title="title" desc="desc" count={5}/> */}
      {/* <Button />
      <Button size='bg' color='secondary'/>
      <Button size='sm' color='error' /> */}
      <Card />
    </div>
  );
}

export default App;
