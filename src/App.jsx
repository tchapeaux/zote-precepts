import "./App.css";

import { useState } from "react";
import PreceptSelector from "./PreceptSelector";
import OnePrecept from "./OnePrecept";

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="App">
      <header>
        <blockquote>
          To what do I owe my long string of triumphs and victories, you ask?
          <br />
          [T]he key is in my personal philosophy, the...
          <h1>“Fifty-Seven Precepts of Zote”</h1>
        </blockquote>
      </header>

      <OnePrecept
        key={selected}
        selected={selected}
        setSelected={setSelected}
      />

      <PreceptSelector selected={selected} setSelected={setSelected} />

      <footer>
        <p>Text and music are the property of Team Cherry</p>
      </footer>
    </div>
  );
}
