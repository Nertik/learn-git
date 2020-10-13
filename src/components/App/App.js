import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <a href="https://www.youtube.com/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png"
            id="logo-head"
          ></img>
        </a>
        <input id="search"></input>
      </div>
      <div className="center">
        <div className="video-content">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/INVbXpNsuPI"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}

export default App;
