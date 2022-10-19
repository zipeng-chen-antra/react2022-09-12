import "./barloading.css";

export default function BarLoading({loadingText}) {

    const divCreator = (len) => Array.from({length: len}, (x, i) => i);
    
    return (
      <div className="loading-animation">
        <div className="loading-animation__div-container">
          {divCreator(5).map((element,index) => <div key={index} className={`div${element}`}></div>)}
        </div>
        <h1>{loadingText}</h1>
      </div>
    );
  }