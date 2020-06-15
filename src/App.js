import React, { useState } from "react";
import "./App.css";
import "./index.css";

import Intervalo from "./components/Intervalo";
import Media from "./components/Media";
import Soma from "./components/Soma";
import Sorteio from "./components/Sorteio";

function App() {
  const [min, setMin] = useState(100);
  const [max, setMax] = useState(1000);

  return (
    <div className="App">
      <h1>Exercício React-Redux</h1>
      <div className="linha">
        <Intervalo
          min={min}
          max={max}
          onMinChange={setMin}
          onMaxChange={setMax}
        />
      </div>
      <div className="linha">
        <Media min={min} max={max}>
          Y
        </Media>
        <Soma min={min} max={max}></Soma>
        <Sorteio min={min} max={max}>
          Y
        </Sorteio>
      </div>
    </div>
  );
}

export default App;
