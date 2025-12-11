import "./App.css";

import { useState } from "react";
import PreceptSelector from "./PreceptSelector";
import OnePrecept from "./OnePrecept";
import MusicButton from "./MusicButton";

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="App">
      <header>
        {selected === null && (
          <blockquote>
            <span>
              To what do I owe my long string of triumphs and victories, you
              ask?
            </span>
            <br />
            <span className="fade-1">
              The key is in my personal philosophy, the
            </span>
            <h1 className="fade-2">Fifty-Seven Precepts of Zote</h1>
          </blockquote>
        )}
      </header>

      <div className="fade-3">
        <OnePrecept
          key={selected}
          selected={selected}
          setSelected={setSelected}
        />
      </div>

      <PreceptSelector selected={selected} setSelected={setSelected} />
      <MusicButton />

      <footer>
        <p>Fan page not affiliated with Team Cherry</p>
      </footer>
    </div>
  );
}
