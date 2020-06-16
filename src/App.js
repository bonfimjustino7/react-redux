import React from "react";
import "./App.css";
import "./index.css";

import Intervalo from "./components/Intervalo";
import Media from "./components/Media";
import Soma from "./components/Soma";
import Sorteio from "./components/Sorteio";

function App() {
  document.title = "Exercitando com Redux";

  return (
    <div className="App">
      <h1>Exercício React-Redux</h1>
      <div className="linha">
        <Intervalo />
      </div>
      <div className="linha">
        <Media>Y</Media>
        <Soma></Soma>
        <Sorteio>Y</Sorteio>
      </div>
    </div>
  );
}

export default App;
