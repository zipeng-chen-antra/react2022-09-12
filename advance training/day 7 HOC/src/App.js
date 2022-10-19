import { useState, useEffect } from "react";
import CounterClass from "./components/CounterClass";
import CounterFn from "./components/CounterFn";
import StockFn from "./components/StockFn";
import "./App.css"
import CounterHook from "./components/CounterHook";

const pages = [
  {name: "CounterFn", component: CounterFn},
  {name: "CounterClass", component: CounterClass},
  {name: "StockFn",component: StockFn},
  {name: "CounterHook",component: CounterHook}
] 


export default function App() {

  const [currentPage,setCurrentPage] = useState(pages[0]);

  function renderPage(){
    const Component = currentPage.component;
    return <Component />
  }

  function changePage(page){
    setCurrentPage(page);
  }

  return (
    <div>
      <nav className="navbar">
        {pages.map(page=>{
          return <a key={page.name} onClick={()=>changePage(page)} className="tab">{page.name}</a>
        })}

      </nav>
      <div className="page">
      {renderPage()}
      </div>
    </div>
  );
}